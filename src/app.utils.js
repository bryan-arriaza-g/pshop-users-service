const express = require('express');

const appUtils = () => {
  const app = express();
  app.use(express.json());
  return app;
};

module.exports = { appUtils };
