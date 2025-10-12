

const http = require('http')
const fs = require('fs')
const path = require('path');



const server = http.createServer((req, res) => {
    const { url } = req;


    function myFun(endpath) {
        fs.readFile(path.join(__dirname, endpath), 'utf-8', (error, file) => {
            if (error) {
                res.end('<h1>Page not loaded')
            } else {
                res.end(file)
            }
        })
    }

    switch (url) {

        case '/':
        case '/home':
            myFun('pages/home.html')
            break;

        case '/about':
            myFun('pages/about.html')
            break;


        case '/style':
            myFun('pages/css/style.css')
            break;


        case '/home/js':
            myFun('pages/js/home.js')
            break;


        default:
            res.end('<h1> 404 Page Not Found </h1>');
    }
});


const PORT = 7000;
const HOST = 'localhost';


server.listen(PORT, HOST, () => {
    console.log(`Server run at http://${HOST}:${PORT}`);

})