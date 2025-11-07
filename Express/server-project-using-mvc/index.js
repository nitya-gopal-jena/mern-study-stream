
const express = require('express');
const studentsRouter = require('./routers/studentsRouter.js');
const trainerRouter = require('./routers/trainerRoutes.js');
const infoRouter = require('./routers/infoRouter.js');


const app = express();

// Middlewares 
app.use(express.json());



app.use('/api/student', studentsRouter);
app.use('/api/trainer', trainerRouter);
app.use('/api/info', infoRouter);




const PORT = 5000;
const HOST = 'localhost';


app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
});