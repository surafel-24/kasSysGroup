const express = require('express');
const db = require('../data/db');
const router = express.Router();

// Get all news articles
router.get("/", (req, res) => {
  db.query("SELECT * FROM news", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get a single news article by ID
router.get("/:id", (req, res) => {
  db.query(
    "SELECT * FROM news WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: "Article not found" });
      res.json(results[0]);
    }
  );
});

// Add a new news article
router.post("/", (req, res) => {
  const { title, content, imageUrl } = req.body;
  db.query(
    "INSERT INTO news (title, content, imageUrl, likes, comments) VALUES (?, ?, ?, 0, JSON_ARRAY())",
    [title, content, imageUrl],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: results.insertId, title, content, imageUrl, likes: 0, comments: [] });
    }
  );
});

// Update likes for an article
router.patch("/:id/like", (req, res) => {
  db.query(
    "UPDATE news SET likes = likes + 1 WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: "Article not found" });
      db.query("SELECT * FROM news WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results[0]);
      });
    }
  );
});

// Add a comment to an article
router.post("/:id/comment", (req, res) => {
  const { comment } = req.body;
  db.query(
    "SELECT comments FROM news WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: "Article not found" });
      
      // Parse comments, using an empty array if comments are NULL
      let comments = results[0].comments ? JSON.parse(results[0].comments) : [];
      comments.push(comment);
      
      db.query(
        "UPDATE news SET comments = ? WHERE id = ?",
        [JSON.stringify(comments), req.params.id],
        (err) => {
          if (err) return res.status(500).json({ error: err.message });
          res.json({ message: "Comment added successfully", comments });
        }
      );
    }
  );
});

// Get comments for an article
router.get("/:id/comments", (req, res) => {
  db.query(
    "SELECT comments FROM news WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0) return res.status(404).json({ message: "Article not found" });
      
      // Parse comments, using an empty array if comments are NULL
      const comments = results[0].comments ? JSON.parse(results[0].comments) : [];
      console.log(comments)
      
      res.json({ comments });
    }
  );
});


// Delete an article by ID
router.delete("/:id", (req, res) => {
  db.query(
    "DELETE FROM news WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.affectedRows === 0) return res.status(404).json({ message: "Article not found" });
      res.status(204).end();
    }
  );
});

// Get related articles (example: return 2 random articles)
router.get("/:id/related", (req, res) => {
  db.query(
    "SELECT * FROM news WHERE id != ? ORDER BY RAND() LIMIT 2",
    [req.params.id],
    (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    }
  );
});
module.exports = router;
