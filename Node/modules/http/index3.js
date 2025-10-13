const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    // console.log("client request come");
    // res.end("Hello");
    const { url, method } = req;
    console.log("url =", url);
    console.log("method =", method);

    function myfunc(endPath) {
        fs.readFile(path.join(__dirname, endPath), (err, file) => {
            if (err) {
                return res.end("<h1>server side error</h1>")
            } else {
                return res.end(file);
            }
        })
    }
    if (url == "/favicon.ico") return;

    if (method == 'GET') {
        switch (url) {
            case '/':
            case '/home': myfunc("pages/home.html");
                break;

            case '/home/css': myfunc('pages/css/style.css')
                break;

            case '/home/js': myfunc('pages/js/home.js')
                break;
            case '/about': myfunc('pages/about.html')
                break;
            case '/signup': myfunc('pages/signup.html')
                break;
            case '/login': myfunc('pages/login.html')
                break;
            default:
                res.end("<h1>404 page not found</h1>")
        }
    } else if (method === 'POST') {
        switch (url) {
            case '/signup': req.on('data', (userDetails) => {
                let user = JSON.parse(userDetails.toString())
                console.log(user);
                return res.end(JSON.stringify({ message: 'user details recieved in backend and printed' }));
            })
                break;

            case '/login': req.on('data', (userDetails) => {
                let user = JSON.parse(userDetails.toString())
                console.log(user);
                return res.end(JSON.stringify({ message: 'user details recieved in backend and printed' }));
            })
                break;

            default: res.end('<h1> 404 page not found </h1>')
        }
    }

})

server.listen('4000', 'localhost', () => {
    console.log("Server started http://localhost:4000");
})