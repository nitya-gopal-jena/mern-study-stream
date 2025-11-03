
const express = require('express');
const path = require('path')
const fs = require('fs');


const app = express();


app.use(express.urlencoded());
app.use(express.json())


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'pages'));



app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/signup', (req, res) => {
    res.render('signup')
})

app.get('/login', (req, res) => {
    res.render('login')
})


app.post('/signup', (req, res) => {
    const { username, password, age } = req.body;
    try {
        if (!username || !password || !age) {
            return res.render('signup', { message: 'Provide all fields' })
        }

        const userArr = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));

        const isUser = userArr.find((u) => u.username == username)
        if (isUser) {
            return res.render('signup', { message: 'User with this name already exist' })
        }


        userArr.push({ username, password, age });
        fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(userArr));

        return res.render('login')

    } catch (error) {
        return res.render('signup', { message: 'Server side error' })
    }
})


app.post('/login', (req, res) => {
    let { username, password } = req.body;

    try {
        if (!username || !password) {
            return res.render('login', { message: 'Provide all the fields' });
        }

       let userArr = JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf-8'));
       let isUser = userArr.find((u) => u.username === username);

        if (!isUser) {
            return res.render('login', { message: 'Invalid username' });
        }

        if (isUser.password !== password) {
            return res.render('login', { message: 'Invalid password' });
        }

        return res.render('home', {username});

    } catch (error) {
        return res.render('login', { message: 'Server side error' });
    }
});


app.get('/logout', (req, res) => {
    res.redirect('/');
});




const PORT = 5000;
const HOST = 'localhost';


app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);

})