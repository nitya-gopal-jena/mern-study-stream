
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

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


module.exports = { trainerSignup};