// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Middleware
app.use(cors());
app.use(express.json());

// Create user route sign in
app.post('/api/SignInUsers', async (req, res) => {
    const { username, email, password,bio } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (username, email, password,bio) VALUES (?, ?, ?,?)';
        const values = [username, email, hashedPassword,bio];

        db.query(query, values, (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error', error: err });
            res.status(201).json({ message: 'User created successfully', userId: result.insertId });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

//user log in
app.post('/api/users/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], async (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (results.length === 0) return res.status(404).json({ message: 'User not found' });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

        res.status(200).json({ message: 'Logged in successfully', user });
    });
});

//make for user update
app.put('/api/users/:id', async (req, res) => {
    const { username, email, password,bio } = req.body;
    const { id } = req.params;

    if (!username || !email || !password || !bio) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'UPDATE users SET username = ?, email = ?, password = ?, password = ? WHERE id = ?';
        const values = [username, email, hashedPassword,bio, id];

        db.query(query, values, (err, result) => {
            if (err) return res.status(500).json({ message: 'Database error', error: err });
            if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
            res.status(200).json({ message: 'User updated successfully' });
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

//for delete user
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        if (result.affectedRows === 0) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    });
});

// Create comment route
app.post('/api/comments', (req, res) => {
    const { post_id, user_id, content } = req.body;

    if (!post_id || !user_id || !content) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const query = 'INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)';
    db.query(query, [post_id, user_id, content], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Comment added successfully', commentId: result.insertId });
    });
});

// Create like route
app.post('/api/likes', (req, res) => {
    const { post_id, user_id } = req.body;

    if (!post_id || !user_id) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const query = 'INSERT INTO likes (post_id, user_id) VALUES (?, ?)';
    db.query(query, [post_id, user_id], (err, result) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(201).json({ message: 'Like added successfully', likeId: result.insertId });
    });
});

// Get all posts route
app.get('/api/posts', (req, res) => {
    const query = `SELECT p.*, u.username, u.profile_picture
                   FROM posts p
                   JOIN users u ON p.user_id = u.user_id
                   ORDER BY p.created_at DESC`;

    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ message: 'Database error', error: err });
        res.status(200).json(results);
    });
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
