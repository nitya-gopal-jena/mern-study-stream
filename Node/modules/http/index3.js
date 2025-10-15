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
            case '/delete': myfunc('pages/delete.html')
                break;
            case '/update': myfunc('pages/update.html')
                break;
            default:
                res.end("<h1>404 page not found</h1>")
        }

    } else if (method === 'POST') {
        switch (url) {

            case '/signup': req.on('data', (userDetails) => {
                let user = JSON.parse(userDetails.toString())

                // Required all fields for craete the uuser 
                if (!user.name || !user.email || !user.password || !user.age) {
                    return res.end(JSON.stringify({ message: 'All fields are required to create user' }))
                }

                console.log(user);

                // Read users.json file 
                const usersArr = JSON.parse(fs.readFileSync(path.join(__dirname, '/users.json'), 'utf-8'));
                const isUser = usersArr.find((ele) => ele.email == user.email);
                if (isUser) {
                    return res.end(JSON.stringify({ message: 'user with this email already exists' }))
                }

                // Create users inside the users.json file (push users data to json)
                usersArr.push(user);
                fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(usersArr));
                return res.end(JSON.stringify({ message: 'User created successfully' }))

                // return res.end(JSON.stringify({ message: 'user details recieved in backend and printed' }));
            })
                break;

            case '/login': req.on('data', (userDetails) => {
                let user = JSON.parse(userDetails.toString())
                fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (error, file) => {

                    if (error) {
                        return res.end(JSON.stringify({ message: 'Server side error' }))
                    }

                    usersArr = JSON.parse(file)
                    const isUser = usersArr.find((u) => u.email === user.email);

                    if (!isUser) {
                        return res.end(JSON.stringify({ message: 'Invalid Email' }))
                    }

                    if (isUser.password !== user.password) {
                        return res.end(JSON.stringify({ message: 'Invalid Password' }))
                    }

                    return res.end(JSON.stringify({ message: 'user login successfully' }));

                })

                console.log(user);
            })
                break;

            default: res.end('<h1> 404 page not found </h1>')
        }
    }



    else if (method === 'DELETE') {
        if (url === '/delete') {


            req.on('data', (userDetails) => {
                // reading the user details from req
                const user = JSON.parse(userDetails.toString());
                fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, file) => {
                    if (err) {
                        return res.end(JSON.stringify({ message: "Server Side error" }));
                    }
                    // parsing the user data from file means converting string data to object
                    let userArr = JSON.parse(file)
                    // checking the user is exist or not
                    const userExist = userArr.find(u => u.email === user.email);
                    if (!userExist) {
                        return res.end(JSON.stringify({ message: "user not found" }));
                    }
                    if (userExist.password !== user.password) {
                        return res.end(JSON.stringify({ message: "Invalid password" }));
                    }
                    userArr = userArr.filter(u => u.email !== user.email);

                    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(userArr));
                    return res.end(JSON.stringify({ message: "user deleted successfully" }));
                });
            });
        }
    }

    else if (url == '/update' && method == 'PUT') {
        req.on('data', (userDetails) => {
            const user = JSON.parse(userDetails.toString());
            fs.readFile(path.join(__dirname, 'users.json'), 'utf-8', (err, file) => {
                if (err) {
                    return res.end(JSON.stringify({ message: 'Server side error' }));
                }

                let userArr = JSON.parse(file);
                const userExist = userArr.find((u) => u.email === user.email);
                if (!userExist) {
                    return res.end(JSON.stringify({ message: 'User not found' }));
                }

                if (userExist.password !== user.password) {
                    return res.end(JSON.stringify({ message: "Current password not match" }));
                }

                if (!user.newPassword || user.newPassword.trim() === '') {
                    return res.end(JSON.stringify({ message: 'New password cannot be empty' }));
                }

                userExist.password = user.newPassword;

                const index = userArr.findIndex((u) => u.email === user.email);
                userArr[index].password = user.newPassword;

                fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(userArr));


                return res.end(JSON.stringify({ message: "password updated successfully" }));
            })
        })
    }


});


server.listen('4000', 'localhost', () => {
    console.log("Server started http://localhost:4000");
})