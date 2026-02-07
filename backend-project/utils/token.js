import jwt from 'jsonwebtoken'

const generateToken = (student) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is missing in environment variables");
    }

    return jwt.sign(
        { id: student._id, email: student.email, password:student.password },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
};

export default generateToken;