const userDto = (user = {}) => {
  const { id, firstName, lastName, username, password, email, avatar } = user;
  return { id, firstName, lastName, username, password, email, avatar };
};

const usersDto = (users = []) => users.map(user => userDto(user));

module.exports = {
  usersDto,
  userDto,
};
