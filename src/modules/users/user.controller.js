const utils = require('../../util/api');
const User = require('./user');
const { usersDto, userDto } = require('./user.dto');
const UserService = require('./user.service');

const find = async (req, res) => {
  const users = await UserService.find();
  return utils.getResponse(req, res, utils.httpCodes.OK, usersDto(users));
};

const findById = async (req, res) => {
  const { userId } = req.params;
  const user = await UserService.findById(userId);
  return utils.getResponse(req, res, utils.httpCodes.OK, userDto(user));
};

const create = async (req, res) => {
  const { firstName, lastName, username, password, email, avatar, status, role } = req.body;
  const user = new User({ firstName, lastName, username, password, email, avatar, status, role });
  const savedUser = await UserService.create({ ...user });
  return utils.getResponse(req, res, utils.httpCodes.OK, userDto(savedUser), 'Created');
};

const update = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, username, password, email, avatar, status, role } = req.body;
  const user = new User({ id: userId, firstName, lastName, username, password, email, avatar, status, role });
  const savedUser = await UserService.update(userId, { ...user });
  return utils.getResponse(req, res, utils.httpCodes.OK, userDto(savedUser), 'Updated');
};

const remove = async (req, res) => {
  const { userId } = req.params;
  const removedUser = await UserService.remove(userId);
  return utils.getResponse(req, res, utils.httpCodes.OK, userDto(removedUser), 'Removed');
};

module.exports = {
  find,
  findById,
  create,
  update,
  remove,
};
