const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Student signup
const studentSignup = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;

        if (!name || !email || !password || !age) {
            return res.status(400).json({ message: 'Provide all the input fields' });
        }

        const studentArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../students.json'), 'utf-8'));
        const isStudent = studentArr.find((s) => s.email == email);
        if (isStudent) {
            return res.status(409).json({ message: 'student with this email already exist' });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        studentArr.push({ ...req.body, password: hashPassword });
        fs.writeFileSync(path.join(__dirname, '../students.json'), JSON.stringify(studentArr));

        return res.status(200).json({ message: 'Student account created successfully' });

    } catch (error) {
        console.log('error = ', error);
        return res.status(500).json({ message: 'Server side error', error });
    }
};

// Student login
const studentLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (req.body === undefined) {
            return res.status(400).json({ message: 'Provide all values' });
        }

        if (!email || !password) {
            return res.status(400).json({ message: 'Provide all input fields' });
        }

        const studentArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../students.json'), 'utf-8'));
        const isStudent = studentArr.find((s) => s.email == email);
        if (!isStudent) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        const isPassMatch = await bcrypt.compare(password, isStudent.password);
        if (!isPassMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const payload = { email: email, role: 'student' };
        const token = jwt.sign(payload, 'student1234', { expiresIn: '1h' });

        return res.status(200).json({ message: 'Login successfull', token });
    } catch (error) {
        return req.status(500).json({ message: 'Server side error', error });
    }
};


// Student details 
const studentDetails = async (req, res) => {
    const email = req.user.email;

    try {
        const studentArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../students.json'), 'utf-8'));
        const isStudent = studentArr.find((s) => s.email == email);

        if (!isStudent) {
            return res.status(401).json({ message: 'Your account has been deleted' });
        }

        delete isStudent.password;

        return res.status(200).json({ message: 'Data fetch successfully', data: isStudent });
    } catch (error) {
        return res.status(500).json({ message: 'Server side error', error });
    }
};

// Delete Account
const deleteAccount = (req, res) => {
    const email = req.user.email;

    try {

        let studentArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../students.json'), 'utf-8'));
        studentArr = studentArr.filter((s) => s.email != email);

        fs.writeFileSync(path.join(__dirname, '../students.json'), JSON.stringify(studentArr));

        return res.status(200).json({ message: 'Student account has been deleted' });

    } catch (error) {
        return res.status(500).json({ message: 'Server side error', error });
    }
}

const updatePassword = async (req, res) => {
    try {

        const email = req.user.email;
        const { password, newPassword } = req.body;

        if (req.body === undefined) {
            return res.status(400).json({ message: 'Provide all values' });
        }

        if (!password || !newPassword) {
            return res.status(400).json({ message: 'Provide all input fields' });
        }

        const studentArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../students.json'), 'utf-8'));
        const isStudent = studentArr.find((s) => s.email == email);
        if (!isStudent) {
            return res.status(401).json({ message: 'Student account has been deleted' })
        }

        const isPassMatch = await bcrypt.compare(password, isStudent.password);
        if (!isPassMatch) {
            return res.status(400).json({ message: 'Current password is invalid' })
        }

        const hashPassword = await bcrypt.hash(newPassword, 10);
        isStudent.password = hashPassword;

        fs.writeFileSync(path.join(__dirname, '../students.json'), JSON.stringify(studentArr));
        return res.status(200).json({ message: 'Password has been updated' });


    } catch (error) {
        return res.status(500).json({ message: 'Server side error' });
    }
}



module.exports = { studentSignup, studentLogin, studentDetails, deleteAccount, updatePassword };
