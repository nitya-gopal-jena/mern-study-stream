const express = require('express');
const { allStudentsInfo } = require('../controllers/infoController');
const authentication = require('../auth/auth');
const authorization = require('../auth/authorization');


const infoRouter = express.Router();

infoRouter.get('/allStudents', authentication, authorization,  allStudentsInfo);



module.exports = infoRouter;