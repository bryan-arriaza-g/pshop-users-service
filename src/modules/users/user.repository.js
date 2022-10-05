const { query, save } = require('../../config/db');
const utils = require('../../util/api');

const USERS = 'users.json';

const find = async () => {
  const users = await query(USERS);
  return users;
};

const create = async (data, user) => {
  user.id = utils.getID();
  user.uuid = utils.getUUID();
  const savedUser = await save(USERS, data, user);
  return savedUser;
};

const update = async (data, user) => {
  const savedUser = await save(USERS, data, user);
  return savedUser;
};

const remove = async (data, user) => {
  const removedUser = await save(USERS, data, user);
  return removedUser;
};

module.exports = {
  find,
  create,
  update,
  remove,
};
