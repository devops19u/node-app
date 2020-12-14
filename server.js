'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<html><body style="background-color:#92a8d1;"><h1 style="color:blue;text-align: center;">Welcome to AWS-Devops World!!</h1></body></html> \n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
