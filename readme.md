# user authentication service

1. sign up
  url: /auth/signup
  method: post
  body: {
    email: 'godking@hotmail.com',
    username: 'godking',
    password: 'xxxxxxxxxxx'
  }

  response:
    auth_token


2. login
  url: /auth/login
  method: post
  body: {
    username: 'godking', (also could use email)
    password: 'xxxxxxxxxxx'
  }

  response:
    auth_token

3. logout
  url: /auth/logout
  method: delete

  response: 200 OK

4. wechat login