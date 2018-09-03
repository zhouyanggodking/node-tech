class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  update(userName, password) {
    this.userName = userName;
    this.password = password;
  }
}