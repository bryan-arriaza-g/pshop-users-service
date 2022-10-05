const { query } = require('../../config/db');

const USERS = 'users.json';

const find = async () => {
  const users = await query(USERS);
  return users;
};

module.exports = {
  find,
};
