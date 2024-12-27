// Create web server
const express = require('express');
const app = express();
// Create a port
const PORT = 3000;
// Import the comments.js file
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get a comment by id
app.get('/comments/:id', (req, res) => {
  const comment = comments.find((comment) => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  }
  res.json(comment);
});

// Listen to the port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});