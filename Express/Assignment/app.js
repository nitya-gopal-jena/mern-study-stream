
const express = require('express');
const fs = require('fs');
const path = require('path')

const app = express();

// Middlewares  
app.use(express.json())



// Signup 

app.post('/api/student', (req, res) => {

    const student = req.body;
    const { name, email, password } = student;


    const stuData = fs.readFileSync(path.join(__dirname, 'student.json'), 'utf-8');
    const stuFile = JSON.parse(stuData);


    const id = Math.trunc(Math.random() * 1000);

    if (!email || !name || !password) {
        return res.status(400).json({ message: 'Please provide all fields' })
    }

    const isEmail = stuFile.find(e => e.email === email);
    if (isEmail) {
        return res.status(409).json({ message: 'Email already exist' })
    }

    const newStudFile = { name, email, password, id }

    stuFile.push(newStudFile);

    fs.writeFileSync(path.join(__dirname, 'student.json'), JSON.stringify(stuFile, null, 2));

    return res.status(200).json({ message: 'Student Created' })

})


// Get Student data by id

app.get('/api/student/:id', (req, res) => {
    const { id } = req.params;

    const stuData = fs.readFileSync(path.join(__dirname, 'student.json'), 'utf-8');
    const stuFile = JSON.parse(stuData);

    const student = stuFile.find((e) => e.id === Number(id));

    if (!student) {
        return res.status(400).json({ message: 'Student not found' })
    }

    return res.status(200).json(student);
})


// Update password

app.patch('/api/student/pass', (req, res) => {

    const student = req.body
    const { currentPassword, newPassword, confirmPassword, email } = student;

    const stuData = fs.readFileSync(path.join(__dirname, 'student.json'), 'utf-8');
    const stuFile = JSON.parse(stuData);


    const stuExist = stuFile.find((student) => {
        return student.email === email
    });

    if (!stuExist) {
        return res.status(404).json({ message: 'Student not found' });
    }

    if (currentPassword !== stuExist.password) {
        return res.status(400).json({ message: 'Current password is wrong' });
    }

    if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: 'New password and confirm password should be match ' });
    }


    stuExist.password = newPassword;

    fs.writeFileSync(path.join(__dirname, 'student.json'), JSON.stringify(stuFile, null, 2));

    return res.status(200).json({ message: 'password updated successfully' });

})


// Delete student

app.delete('/api/student/delete/:id', (req, res) => {
    const uId = req.params.id;
    const { currentPassword } = req.body;

    const stuData = fs.readFileSync(path.join(__dirname, 'student.json'), 'utf-8');
    const stuFile = JSON.parse(stuData);


    const studentExist = stuFile.find((e) => e.id == uId);
    if (!studentExist) {
        return res.status(404).json({ message: 'Id not match ' });
    }


    if (studentExist.password != currentPassword) {
        return res.status(401).json({ message: 'Incorrect password' });
    }

    let isId = stuFile.filter((el) => el.id != uId);




    fs.writeFileSync(path.join(__dirname, 'student.json'), JSON.stringify(isId, null, 2));

    return res.status(200).json({ message: 'student profile deleted successfully' });


})






const PORT = 4000;
const HOST = 'localhost'

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);

})