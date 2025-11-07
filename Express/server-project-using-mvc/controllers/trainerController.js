
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const trainerSignup = async (req, res) => {

    if (req.body == undefined) {
        return res.status(400).json({ Status: 'false', message: "all input field cannot be empty" });
    }

    const { name, email, password, code } = req.body;

    try {
        if (!name || !email || !password || !code) {
            return res.status(400).json({ Status: "false", message: "Provide all input fields" });

        }

        const isTrainer = JSON.parse(fs.readFileSync(path.join(__dirname, '../trainers.json'), 'utf-8'));

        const isExist = isTrainer.find((e) => e.email == email

        )

        if (isExist) {
            return res.status(409).json({ Status: "false", message: "trainer email already exist" });
        }

        if (code !== 'T@123') {
            return res.status(400).json({ Status: "false", message: "Invalid code" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        isTrainer.push({ ...req.body, password: hashPassword });

        fs.writeFileSync(path.join(__dirname, '../trainers.json'), JSON.stringify(isTrainer));

        return res.status(201).json({ Status: "true", message: "Trainer Account created successfully" });

    } catch (error) {
        console.log("error=", error);
        return res.status(500).json({ Status: 'false', message: "Server side Error" });
    }

}


// trainer login
const trainerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (req.body === undefined) {
            return res.status(400).json({ message: 'Provide all values' });
        }

        if (!email || !password) {
            return res.status(400).json({ message: 'Provide all input fields' });
        }

        const trainerArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../trainers.json'), 'utf-8'));
        const isTrainer = trainerArr.find((s) => s.email == email);
        if (!isTrainer) {
            return res.status(400).json({ message: 'Invalid email' });
        }

        const isPassMatch = await bcrypt.compare(password, isTrainer.password);
        if (!isPassMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const payload = { email: email, role: 'trainer' };
        const token = jwt.sign(payload, 'student12345', { expiresIn: '24h' });

        return res.status(200).json({ message: 'Login successfull', token });
    } catch (error) {
        return req.status(500).json({ message: 'Server side error', error });
    }
};

module.exports = { trainerSignup, trainerLogin };