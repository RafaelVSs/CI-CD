const express = require('express');
const app = express();
const port = 8101;

app.get('/', (req, res) => {
  res.send('Hello, Rafael!');
});

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
