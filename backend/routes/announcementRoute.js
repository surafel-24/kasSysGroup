const express = require('express');
const router = express.Router();
const db = require('../data/db');

// Fetch all announcements
router.get('/', (req, res) => {
    db.query('SELECT * FROM announcements', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching announcements' });
        }
        res.json(results);
    });
});

// Add a new announcement
router.post('/', (req, res) => {
    const { title, content, imageUrl } = req.body;
    const query = 'INSERT INTO announcements (title, content, imageUrl) VALUES (?, ?, ?)';
    db.query(query, [title, content, imageUrl], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error adding announcement' });
        }
        res.status(201).json({ message: 'Announcement added', announcementId: result.insertId });
    });
});

// Like an announcement
router.put('/:id/like', (req, res) => {
    const { id } = req.params;
    const query = 'UPDATE announcements SET likes = likes + 1 WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error liking announcement' });
        }
        res.json({ message: 'Like added' });
    });
});

module.exports = router;
