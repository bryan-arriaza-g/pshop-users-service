const utils = require('../../util/api');
const { usersDto } = require('./user.dto');
const UserService = require('./user.service');

const find = async (req, res) => {
  const users = await UserService.find();
  return utils.getResponse(req, res, utils.httpCodes.OK, usersDto(users));
};

module.exports = {
  find,
};
