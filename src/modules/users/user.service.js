const UserRepository = require('./user.repository');

const find = async () => {
  const users = await UserRepository.find();
  return users;
};

module.exports = {
  find,
};
