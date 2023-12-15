const express = require('express');
const pool = require('./database');
const cors = require('cors')

// const path = require('path');
// const { fileURLToPath } = require('url');
// const { dirname } = require('path');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors())
app.use(express.json());

// app.get('/', (req, res) => {
    // res.sendFile('./index.html', { root: __dirname });
// }); 

// add post
app.post('/api/posts/', async(req, res) => {
    try {
        console.log("a post request has arrived");
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posts(date, author, content, image) values ($1, $2, $3, $4)    RETURNING*", [post.date, post.author, post.content, post.image]
        );
        res.json(newpost);
    } catch (err) {
        console.error(err.message);
    }
});

// get all posts
app.get('/api/posts', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const posts = await pool.query(
            "SELECT * FROM posts"
        );
        res.json(posts.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get post by id
app.get('/api/posts/:id', async(req, res) => {
    try {
        console.log("get a post with specific id request has arrived");
        const { id } = req.params;
        const posts = await pool.query(
            "SELECT * FROM posts WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// update post
app.put('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const post = req.body;
        console.log("update request has arrived");
        const updatepost = await pool.query(
            "UPDATE posts SET (date, author, content, urllink) = ($2, $3, $4, $5) WHERE id = $1", [id, post.date, post.author, post.content, post.image]
        );
        res.json(updatepost);
    } catch (err) {
        console.error(err.message);
    }
});

// delete post
app.delete('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params;
        console.log("delete a post request has arrived");
        const deletepost = await pool.query(
            "DELETE FROM posts WHERE id = $1", [id]
        );
        res.json(deletepost);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});