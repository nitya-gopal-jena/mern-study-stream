import express from 'express'
import dbConnect from './db/db.js';
import studentRoute from './routes/studentsRoute.js';
import { configDotenv } from 'dotenv'
configDotenv()


const app = express();


app.use(express.json())


app.use('/api/v1/', studentRoute)



const PORT = process.env.PORT;
const HOST = process.env.HOST

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    dbConnect();

})