

const http = require('http')
const fs = require('fs')
const path = require('path')


const server = http.createServer((req, res) => {

    // console.log('Url from client', req.url);
    const { url, method } = req;
    if (url === '/favicon.ico') return;  // Not execute this 

    console.log('URl: ', url);
    console.log('METHOD: ', method);

    const data = fs.readFileSync(path.join(__dirname, 'pages/home.html'), 'utf-8');

    res.write(data);
    res.end();
});


const PORT = 5000;
const HOST = 'localhost';


server.listen(PORT, HOST, () => {
    console.log(`Server run at http://${HOST}:${PORT}`);

})