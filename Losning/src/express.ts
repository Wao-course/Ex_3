const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint at / with GET and POST that returns data with Content-Type: text/plain
app.route('/')
  .get((req: any, res: any) => {
    res.type('text/plain').send('Hello madafakar, Express.js');
  })
  .post((req: any, res: any) => {
    res.type('text/plain').send(req.body);
  });

// Endpoint at /json with GET and POST that returns data with Content-Type: application/json
app.route('/json')
  .get((req: any, res: any) => {
    res.json({ message: 'Hello, Express.js' });
  })
  .post((req: any, res: any) => {
    res.json(req.body);
  });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
