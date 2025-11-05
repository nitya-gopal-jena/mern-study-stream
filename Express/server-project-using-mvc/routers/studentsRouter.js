const express = require('express');
const { studentSignup, studentLogin, studentDetails, deleteAccount } = require('../controllers/studentsController.js');
const authentication = require('../auth/auth.js');


const studentsRouter = express.Router()


studentsRouter.post('/signup', studentSignup);
studentsRouter.post('/login', studentLogin);
studentsRouter.get('/profile-details', authentication, studentDetails);
studentsRouter.delete('/delete', authentication, deleteAccount);


module.exports = studentsRouter;