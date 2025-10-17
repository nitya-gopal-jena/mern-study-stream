
import express from 'express'
import cookieParser from 'cookie-parser';



const app = express();

// Middleware 
app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
    console.log(app === req.app);
    res.json({message:'Server started '})
})


app.post('/add', (req, res) => {
    console.log(req.body);
    res.json({message:'Data recieved in server'})
})

// Getting hostname from server 
app.get('/host', (req, res) => {
    console.log("hostname = ", req.hostname);
    return res.json({message:'Hostname from server', hostname:req.hostname})
})


// Read the cookies 
app.get('/cookie', (req, res) => {
    console.log('Cookie = ', req.cookies);
    return res.json({message:'Cookies recieved in server'})
})



const PORT = 7000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server run at http://${HOST}:${PORT}`);
});

