// Using type script
// // https://nodejs.org/en/docs/guides/getting-started-guide/

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req : any, res: any) => {
//     if (req.url === '/ping') {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');  
//       res.end('pong');
      
//     }
//     else {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'text/plain');  
//       res.end('Hello World');
//     }
//   });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
import orderRouter from './orders';
import express, { Request, Response } from 'express';

//Using Express.js
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint at / with GET and POST that returns data with Content-Type: text/plain
app.use('/', orderRouter);


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
