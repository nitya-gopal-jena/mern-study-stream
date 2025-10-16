

const express = require('express');

const app = express();



app.get('/', (req, res) => {
    res.end('<h1>Hello From Server</h1>');
})



const PORT = 7000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server run at http://${HOST}:${PORT}`);
})