# Homework Node.js #4

![N|Solid](https://cdn.iconscout.com/icon/free/png-512/nodejs-2-226035.png?f=avif&w=256)

# User model

Content-Type: application/json

- ### Create a new user
  ##### **POST**​/users​/signup

```sh
{
 "email": "example@example.com", requeued,
 "password": "examplepassword", requeued,
 "subscription": ["starter", "pro", "business"]
}
```

- ### Log In User
  ##### **POST**​/users/login

```sh
{
 "email": "example@example.com", requeued,
 "password": "examplepassword", requeued
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
   "subscription": ["starter", "pro", "business"], requeued
}
```

# ===============================================

# Contact model

- ### Get Contacts Pagination
  ##### **GET**​contacts?page=<page>&limit=<limit contacts on page, max limit 20 items>

```sh
Example: "/contacts?page=1&limit=20"
```

- ### Get Contacts by Favorite
  ##### **GET**​ /contacts?favorite=<true or false>

```sh
Example: "/contacts?favorite=true"
```
