const express = require('express');
const fs = require('fs');
const cors = require('cors')


const app = express()

app.use(cors())


app.get('/', (req, res) => {
    let data = JSON.parse(fs.readFileSync('./users.json', 'utf-8'));
    return res.json(data);
})



const PORT = 5000;
const HOST = 'localhost';



app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    
})