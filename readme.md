# Homework Node.js #5

![N|Solid](https://cdn.iconscout.com/icon/free/png-512/nodejs-2-226035.png?f=avif&w=256)

# User model

Content-Type: application/json

- ### Create a new user
  ##### **POST**​/users​/signup

```sh
{
 "email": "example@example.com", required
 "password": "examplepassword", required,
 "subscription": ["starter", "pro", "business"]
}
```

- ### Log In User
  ##### **POST**​/users/login

```sh
{
 "email": "example@example.com", required,
 "password": "examplepassword", required
}
```

- ### Log Out User
  ##### **POST**​/users/logout

```sh
Authorization: "Bearer {{token}}"
```

- ### Get Current User
  ##### **GET**​/users/current

```sh
Authorization: "Bearer {{token}}"
```

- ### Update User Subscription
  ##### **PATCH**​/users/subscription

```sh
{
   "subscription": ["starter", "pro", "business"], required
}
```
