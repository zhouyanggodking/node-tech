// pure in-memory data

const userList = [];

class UserList {  
  // userName, email required and must be unique, no hash for password
  static add(userName, email, password) {
    if (UserList.isExistingByUserName(userName)) {
      throw new Error('User name has already existed!');
    }
    if (UserList.isExistingByEmail(email)) {
      throw new Error('Email has already existed');
    }

    userList.push({
      userName,
      email,
      password
    });
  }

  static findByUserName(userName) {
    const resultArr = userList.filter(user => user.userName === userName);
    return resultArr.length ? resultArr[0] : null;
  }

  static findByEmail(email) {
    const resultArr = userList.filter(user => user.email === email);
    return resultArr.length ? resultArr[0] : null;
  }

  static isExistingByUserName(userName) {
    return !!UserList.findByUserName();
  }

  static isExistingByEmail(email) {
    return !!UserList.findByEmail(email);
  }
}

module.exports = UserList;