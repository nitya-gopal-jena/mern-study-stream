
const express = require('express');
const { trainerSignup, trainerLogin } = require('../controllers/trainerController.js');


const trainerRouter = express.Router();


trainerRouter.post('/signup', trainerSignup);
trainerRouter.post('/login', trainerLogin);




module.exports = trainerRouter;