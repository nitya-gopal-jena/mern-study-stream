import { rateLimit } from 'express-rate-limit'

const signupLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,  // 10 minutes
    max: 6,
    message: { message: 'Too many signup attempts. Please try again later.' }
})


const loginLimiter = rateLimit({
     windowMs: 10 * 60 * 1000,  // 10 minutes
    max: 6,
    message: { message: 'Too many login attempts. Please try again later.' }
})


export { signupLimiter, loginLimiter };