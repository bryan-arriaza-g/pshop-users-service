const UserRepository = require('./user.repository');

const find = async () => {
  const users = await UserRepository.find();
  return users;
};

const findById = async userId => {
  const users = await UserRepository.find();
  const foundUser = users.find(user => user.id === userId);
  return foundUser;
};

const create = async user => {
  const users = await UserRepository.find();
  const savedUser = await UserRepository.create([...users, user], user);
  return savedUser;
};

const update = async (userId, user) => {
  const userDb = await findById(userId);
  if (!userDb) {
    return userDb;
  }
  const users = await UserRepository.find();
  const userIndex = users.findIndex(usr => usr.id === userId);
  users[userIndex] = { ...userDb, ...user };
  const savedUser = await UserRepository.update(users, user);
  return savedUser;
};

const remove = async userId => {
  const userDb = await findById(userId);
  if (!userDb) {
    return userDb;
  }
  const users = await UserRepository.find();
  const listUsers = users.filter(usr => usr.id !== userId);
  const removedUser = await UserRepository.remove(listUsers, userDb);
  return removedUser;
};

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
};
