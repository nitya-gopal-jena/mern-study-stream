
const express = require('express');
const { trainerSignup } = require('../controllers/trainerController.js');


const trainerRouter = express.Router();


trainerRouter.post('/signup', trainerSignup);



module.exports = trainerRouter;