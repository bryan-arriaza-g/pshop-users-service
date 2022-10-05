const fs = require('fs');
const path = require('path');
const logger = require('../util/logger')(module);

const connectDB = filename => {
  try {
    logger.success('Database connected data/users.json');
    return path.join(__dirname, 'data', filename);
  } catch (error) {
    logger.error(error);
    return null;
  }
};

const query = async filename => {
  const PATH = connectDB(filename);
  const readFile = new Promise((resolve, reject) => {
    fs.readFile(PATH, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Database error connection!'));
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
  try {
    const content = await readFile;
    return content;
  } catch (err) {
    return [];
  }
};

module.exports = { connectDB, query };
