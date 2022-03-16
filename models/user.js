const db = require("../util/database");

module.exports = class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static find(username) {
    return db.execute("SELECT * FROM tbl_users WHERE username = ?", [username]);
  }

  static save(user) {
    return db.execute(
      "INSERT INTO tbl_users (username, password) VALUES(?, ?)",
      [user.username, user.password]
    );
  }
};
