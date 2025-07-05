import express from 'express';
const app = express();

// Rounting
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

export default app;