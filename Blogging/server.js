const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'youruser',
    password: 'yourpassword',
    database: 'yourdatabase'
});

// Get current flower count
app.get('/flower-count', (req, res) => {
    db.query('SELECT count FROM flower_counter WHERE id=1', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ count: results[0].count });
    });
});

// Increment flower count
app.post('/flower-count/increment', (req, res) => {
    db.query('UPDATE flower_counter SET count = count + 1 WHERE id=1', (err) => {
        if (err) return res.status(500).json({ error: err });
        db.query('SELECT count FROM flower_counter WHERE id=1', (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ count: results[0].count });
        });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));

// Replace your flower button logic with this:
const flowerBtn = document.getElementById('flower-btn');
const flowerCount = document.getElementById('flower-count');

// Fetch initial count from server
fetch('http://localhost:3000/flower-count')
    .then(res => res.json())
    .then(data => {
        flowerCount.textContent = data.count;
    });

flowerBtn.addEventListener('click', function() {
    fetch('http://localhost:3000/flower-count/increment', { method: 'POST' })
        .then(res => res.json())
        .then(data => {
            flowerCount.textContent = data.count;
            if (data.count === 100) {
                alert('Congratulations! You reached 100!');
            }
        });
});