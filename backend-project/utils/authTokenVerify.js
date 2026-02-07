import jwt from 'jsonwebtoken'

export const authTokenVerify = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(400).json({message:'No token provided'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.student = decoded;
        next();

    } catch (error) {
        return res.status(401).json({message:'Invalid or expired token', error:error.message})
    }
}