
import express from 'express'

const app = express();

// Middleware 
app.use(express.json())


app.get('/', (req, res) => {
    console.log(app === req.app);
    res.json({message:'Server started '})
})


app.post('/add', (req, res) => {
    console.log(req.body);
    res.json({message:'Data recieved in server'})
})








const PORT = 7000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server run at http://${HOST}:${PORT}`);
});

