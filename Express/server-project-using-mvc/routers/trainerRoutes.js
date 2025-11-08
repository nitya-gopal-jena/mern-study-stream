
const express = require('express');
const { trainerSignup, trainerLogin, createStudent } = require('../controllers/trainerController.js');
const authentication = require('../auth/auth.js');
const authorization = require('../auth/authorization.js');


const trainerRouter = express.Router();


trainerRouter.post('/signup', trainerSignup);
trainerRouter.post('/login', trainerLogin);
trainerRouter.post('/:email', authentication, authorization, createStudent);



module.exports = trainerRouter;