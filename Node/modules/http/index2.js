

const http = require('http')
const fs = require('fs')
const path = require('path');



const server = http.createServer((req, res) => {
    const { url } = req;
    switch (url) {
        case '/':
        case '/home':
            // Handle home page
            fs.readFile(path.join(__dirname, 'pages/home.html'), 'utf-8', (error, file) => {
                if (error) {
                    res.end("page not loaded")
                } else {
                    res.end(file);
                }
            });
            break;


        case '/':
        case '/about':
            // About  page
            fs.readFile(path.join(__dirname, 'pages/about.html'), 'utf-8', (error, file) => {
                if (error) {
                    res.end("page not loaded")
                } else {
                    res.end(file);
                }
            });
            break;


        default:
            res.end('404 Page Not Found');
    }
});


const PORT = 7000;
const HOST = 'localhost';


server.listen(PORT, HOST, () => {
    console.log(`Server run at http://${HOST}:${PORT}`);

})