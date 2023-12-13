const express = require('express');
const path = require('path');
const pool = require('./database');
const cors = require('cors');
const { fileURLToPath } = require('url');
const { dirname } = require('path');

const port = process.env.PORT || 3000;

const app = express();

const corsOptions = {
    origin: 'http://allowed-origin.com',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use((req, res, next) => {
    console.log('Request:', req.method, req.url);
    res.on('finish', () => {
        console.log('Response:', res.statusCode);
    });
    next();
});

app.use(cors());

app.use(express.static(path.join(__dirname, 'src')));

app.get('/src/assets/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'assets', 'style.css'), { headers: { 'Content-Type': 'text/css' } });
});
app.get('/src/components/icons/My_picture.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'components', 'icons', 'My_picture.png'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'))
})
app.get('/add_post', (req, res) => {
    res.sendFile(path.join(__dirname, 'add_post.html'))
})
app.get('/src/js/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'js', 'script.js'))
});

// The express.json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

    //  Handling HTTP requests code will go here

app.get('/', (req, res) => {
    // res.send can be used to send text and HTML snippets
    //res.send('</h1>First HTML response message! </h1>');

    /* res.sendFile() is a method that can be used to send files as its name indicates
    However, it takes the absolute not the relative path to the file. Therefore, you need to specify what is the root directory.
    To avoid this confusion, you can use  "__dirname"*/
    res.sendFile('./index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});