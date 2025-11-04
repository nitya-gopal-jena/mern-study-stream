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
            return res.status(409).json({ message: 'student with this email already exist' })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        studentArr.push({ ...req.body, password: hashPassword });
        fs.writeFileSync(path.join(__dirname, '../students.json'), JSON.stringify(studentArr));


    } catch (error) {
        console.log('error = ', error);

        return res.status(500).json({ message: 'Server side error', error });
    }
}


// Student login

const studentLogin = async (req, res) => {
    try {

        const { email, password } = req.body;
        if (req.body === undefined) {
            return res.status(400).json({ message: 'Provide all values' })
        }

        if (!email || !password) {
            return res.status(400).json({ message: 'Provide all input fields' })
        }

        const studentArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../students.json'), 'utf-8'));
        const isStudent = studentArr.find((s) => s.email == email);
        if (!isStudent) {
            return res.status(400).json({ message: 'Invalid email' })
        }


        const isPassMatch = await bcrypt.compare(password, isStudent.password);
        if (!isPassMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }


        const payload = { email: email, role: "student" };
        const token = jwt.sign(payload, "student1234", { expiresIn: "1h" });

        return res.status(200).json({ message: 'Login successfull', token });



    } catch (error) {
        return req.status(500).json({ message: 'Server side error', error })
    }
}



module.exports = { studentSignup, studentLogin }