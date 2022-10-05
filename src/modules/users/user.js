class User {
  constructor({ id, uuid, firstName, lastName, username, password, email, avatar, status, role }) {
    this.id = id;
    this.uuid = uuid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
    this.email = email;
    this.avatar = avatar;
    this.status = status;
    this.role = role;
  }
}

module.exports = User;
