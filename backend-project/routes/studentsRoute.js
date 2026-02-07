import express from 'express'
import { handleSignup, handleLogin, handleDeleteAccount, handlePasswordUpdate, handleVerifyOtp } from '../controller/studentsController.js';
import { authTokenVerify } from '../utils/authTokenVerify.js';
import { signupLimiter, loginLimiter } from '../middlewares/rateLimiter.js';

const studentRoute = express.Router();

studentRoute.post('/signup', signupLimiter, handleSignup);
studentRoute.post('/login',loginLimiter, handleLogin);
studentRoute.post('/login/verify', handleVerifyOtp);
studentRoute.delete('/delete', authTokenVerify, handleDeleteAccount);
studentRoute.patch('/update', authTokenVerify, handlePasswordUpdate);



export default studentRoute;