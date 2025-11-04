
const express = require('express');
const studentsRouter = require('./routers/studentsRouter.js');


const app = express();
app.use(express.json());




app.use('/api/student', studentsRouter);


const PORT = 5000;
const HOST = 'localhost';


app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    
})