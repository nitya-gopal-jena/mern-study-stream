import { Student } from "../module/studentSchema.js"
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import generateToken from "../utils/token.js";
import { sendMail } from "../utils/mailer.js";



// Signup

export const handleSignup = async (req, res) => {
    try {


        const { email, password, age, name } = req.body;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,25}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (req.body == undefined) {
            return res.status(400).json({ message: 'Input fields are not blank' })
        }

        if (!email || !password || !name || !age) {
            return res.status(400).json({ message: 'Provide all input fields' })
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: 'Password must be 6-25 characters long and include uppercase, lowercase, number, and special character.' });
        }


        const emailExist = await Student.findOne({ email });
        if (emailExist) {
            return res.status(409).json({ message: 'Student email already exist' })
        }

        const hashPass = await bcrypt.hash(password, 10);

        const createStudent = await Student.insertOne({ name, email, password: hashPass, age });

        createStudent.save();

        return res.status(201).json({ message: 'Student account created successfully' });


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Server side error', error })


    }
}


// Generate the otp while login

export const handleLogin = async (req, res) => {
    try {

        const { email, password } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        const emailExist = await Student.findOne({ email });
        if (!emailExist) {
            return res.status(400).json({ message: 'Email not exist' })
        }

        const passValid = await bcrypt.compare(password, emailExist.password);
        if (!passValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }


        // 6 digit otp code generate 
        const otp = crypto.randomInt(100000, 999999);
        const hashotp = await bcrypt.hash(otp.toString(), 10);


        // Save the otp in db 
        emailExist.otp = hashotp;
        emailExist.otpExpiry = Date.now() + 5 * 60 * 1000;

        await emailExist.save();

        // // Send OTP email
        await sendMail(
            email,
            "Your OTP Code",
            `Your OTP is ${otp}. It will expire in 5 minutes.`,
            `<h2>Your OTP Code</h2><p><b>${otp}</b></p><p>Valid for 5 minutes.</p>`
        );

        return res.status(200).json({ message: 'otp send to your mail ', otp });

    } catch (error) {
        return res.status(500).json({ message: 'Server side error', error: error.message })
    }
}


// verify the otp and generate the token for student

export const handleVerifyOtp = async (req, res) => {
    try {

        const { email, otp } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        const emailExist = await Student.findOne({ email });
        if (!emailExist) {
            return res.status(400).json({ message: 'Stident with this mail id  not exist' })
        }

        if (Date.now() > emailExist.otpExpiry) {
            return res.status(400).json({ message: 'OTP expired' });
        }

        const isValidOtp = await bcrypt.compare(otp.toString(), emailExist.otp);
        if (!isValidOtp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        const token = generateToken(emailExist);

        emailExist.otp = null;
        emailExist.otpExpiry = null;
        await emailExist.save();

        return res.status(200).json({ message: 'Login successful', token })

    } catch (error) {
        return res.status(500).json({ message: 'server side error', error: error.message })
    }
}



// Delete Account

export const handleDeleteAccount = async (req, res) => {
    try {

        const studentIdFromToken = req.student.id;

        const student = await Student.findById(studentIdFromToken);
        if (!student) {
            return res.status(400).json({ message: 'Student not found' })
        }

        if (student._id.toString() !== studentIdFromToken) {
            return res.status(400).json({ message: 'Unauthorized to delete account' })
        }

        await Student.findByIdAndDelete(studentIdFromToken);

        return res.status(200).json({ message: "Account deleted successfully" });

    } catch (error) {
        return res.status(500).json({ message: 'Server side error', error: error.message })
    }
}


// update password

export const handlePasswordUpdate = async (req, res) => {
    try {

        const { password, newPassword, confirmPassword } = req.body;

        const studentEmailFromToken = req.student.email;


        if (!studentEmailFromToken) {
            return res.status(404).json({ message: 'Student email not found from token ' })
        }

        const student = await Student.findOne({ email: studentEmailFromToken })
        if (!student) {
            return res.status(404).json({ message: 'Student not found ' })
        }

        const isPass = await bcrypt.compare(password, student.password);
        if (!isPass) {
            return res.status(401).json({ message: 'current password is invalid' })
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ message: 'new password and confirm password should be match' })
        }

        const hashPass = await bcrypt.hash(newPassword, 10);

        await Student.findOneAndUpdate({ email: studentEmailFromToken, password: hashPass });

        return res.status(200).json({ message: 'Pasword updated successfully' })

    } catch (error) {
        return res.status(500).json({ message: 'Server side error', error: error.message })
    }
}



