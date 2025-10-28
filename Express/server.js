import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// app.get('/', (req, res) => {
//     console.log(app === req.app);
//     res.json({ message: 'Server started ' });
// });

app.post('/add', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Data recieved in server' });
});

// Getting hostname from server
app.get('/host', (req, res) => {
    console.log('hostname = ', req.hostname);
    return res.json({ message: 'Hostname from server', hostname: req.hostname });
});

// Read the cookies
app.get('/cookie', (req, res) => {
    console.log('Cookie = ', req.cookies);
    return res.json({ message: 'Cookies recieved in server' });
});

// Read the method from the request
app.use('/method', (req, res) => {
    console.log('Method = ', req.method);
    return res.end('<h1>Welcome to Home </h1>');
});

// Read the params(parameter)
app.get('/user/:id', (req, res) => {
    console.log('Params = ', req.params);
    return res.json({ message: 'Params accepted in server' });
});

// Print protocol
app.get('/protocol', (req, res) => {
    console.log('Protocol = ', req.protocol);
    return res.json({ message: 'protocol printed' });
});

// Print query from request
app.get('/query', (req, res) => {
    console.log('Query = ', req.query);
    return res.json({ message: 'Query printed ' });
});


// Download image 
app.get('/download', (req, res) => {
    res.download('lufi.jpg')
})


// Send cookies to client 
app.post('/login', (req, res) => {
    let token = 'abcdgstjxgsy';
    res.cookie('token', token);
    res.json({ message: 'Login successful' });

})


// Clear the cookie
app.post('/clear-cookie', (req, res) => {
    res.clearCookie('token');
    return res.json({ message: 'Cookie clear successfully' });
})



app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, 'pages/Home.html'));
})





const PORT = 7000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
    console.log(`Server run at http://${HOST}:${PORT}`);
});
