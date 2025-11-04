const express = require('express');
const { studentSignup, studentLogin } = require('../controllers/studentsController.js');


const studentsRouter = express.Router()


studentsRouter.post('/signup', studentSignup);
studentsRouter.post('/login', studentLogin);

module.exports = studentsRouter;