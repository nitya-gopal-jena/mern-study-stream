const fs = require('fs');
const path = require('path');


const allStudentsInfo = async (req, res) => {

    try {

        if (req.user.role !== 'trainer') {
            return res.status(403).json({ message: 'Access denied: Only trainers can view student details' });
        }

        const studentArr = JSON.parse(fs.readFileSync(path.join(__dirname, '../students.json'), 'utf-8'));
        
        return res.status(200).json(studentArr);

    } catch (error) {
        console.error('Error fetching student details:', error);
        res.status(500).json({ message: 'Server error while retrieving student information' });
    }
}



module.exports = { allStudentsInfo };