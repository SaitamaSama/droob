const express = require('express');
const next = require('next');
const { config } = require('dotenv');

config();
const nextApp = next({ dev: process.env.NODE_ENV === 'development' });
const handle = nextApp.getRequestHandler();
const port = parseInt(process.env.PORT, 10) || 8080;

nextApp.prepare().then(() => {
  const server = express();

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on port ${port}`);
  });
});
