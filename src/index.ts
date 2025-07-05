import express from 'express';

const app = express();

// Rounting
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});