const express = require('express');
const { studentSignup } = require('../controllers/studentsController.js');


const studentsRouter = express.Router()


studentsRouter.post('/signup', studentSignup)


module.exports = studentsRouter;