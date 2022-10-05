const express = require('express');
const cors = require('cors');

const appUtils = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-auth-token');
    next();
  });
  return app;
};

module.exports = { appUtils };
