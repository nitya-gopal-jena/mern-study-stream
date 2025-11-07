
const jwt = require('jsonwebtoken');


const authorization = (req, res, next) => {

    const { role } = req.user;

    try {
        if (role != 'trainer') {
            return res.status(400).json({message:'Invalid role'})
        }

        next();
    } catch (error) {
        return res.status(500).json({message:'Server side error '})
    }
  
}


module.exports = authorization;