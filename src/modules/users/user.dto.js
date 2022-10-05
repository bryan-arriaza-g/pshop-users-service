const userDto = (user = {}) => {
  if (Object.keys(user).length > 0) {
    const { id, firstName, lastName, username, email, avatar, status, password } = user;
    return { id, firstName, lastName, username, email, avatar, status, password };
  }
  return user;
};

const usersDto = (users = []) => users.map(user => userDto(user));

module.exports = {
  usersDto,
  userDto,
};
