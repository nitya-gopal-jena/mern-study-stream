const express = require('express');
const path = require('path');

const app = express()


app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'public', 'pages', 'home.html'))
});




const PORT = 5000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
    
})