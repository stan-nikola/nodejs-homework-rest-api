# Homework Node.js

![N|Solid](https://repository-images.githubusercontent.com/232512685/70107a80-31f8-11ea-9436-66c4dc25c0e2)

# User model

> Content-Type: application/json

- ### Create a new user

  > **Verification email will be sent to the specified email address.**  
  > Avatar is generated using [Gravatar](https://gravatar.com/)

  #### **POST** ​ /api/users​/signup

```sh
Example:
body:{
 "email": "example@example.com", // requeued,
 "password": "examplepassword", // requeued,
 "subscription": ["starter", "pro", "business"], //default:"starter" ,
 "avatarURL": "gravatar" // String,
}
```

- ### Log In User
  #### **POST** ​/ api/users/login

```sh
Example:
body:{
 "email": "example@example.com", //requeued,
 "password": "examplepassword", //requeued
}
```

- ### Verify User

  > **User verification link will be sent by email**

  #### **GET**​ /api/users/verify/:verificationToken

```sh
Example: "/users/verify/kjbad876eqwdbawi"
```

- ### Retry Verify User

  > **User verification link will be sent by email**

  ##### **POST**​/api/users/verify

```sh
body:{
"email": "example@example.com", // requeued
}
```

- ### Get Current User
  #### **GET**​/api/users/current

```sh
Authorization: "Bearer {{token}}"
```

- ### Update User Subscription
  #### **PATCH**​/api/users/subscription

```sh
Example:
body:{
   "subscription": ["starter", "pro", "business"], requeued
}
```

- ### Update User Avatar

  > **Uploaded avatar will be resized to 205\*250 pixels**

  #### **PATCH**​/api/users/avatars

```sh
Authorization: "Bearer {{token}}"
```

```sh
body:{
 "avatarURL": "c:/img.png" //String, requeued, only image files
}

```

# ===============================================

# Contact model

- ### Add Contact
  #### **POST**​ /api/contacts/

```sh
Example:
body: {
   "name":"Billy", //type: String,required
   "email":"billy.villy@mail.com", //  type: String, required
   "phone":"32587542" //  type: String, required
   "favorite":true // type: Boolean, default:false
   }
```

- ### Get Contact by ID
  #### **GET**​ /api/contacts/:contactId

```sh
Example: "/contacts/dfhbsdfcasbdw2e13e"
```

- ### Get Contacts by ID Pagination and by Favorite
  #### **GET**​/api/contacts?page=<page>&limit=<limit contacts on page, max limit 20 items>&favorite=<true or false>

```sh
Example: "/contacts?page=1&limit=20&favorite=true"
```

- ### Update Contact by ID
  #### **PUT**​ /api/contacts/:contactId

```sh
Example:
body: {
 "name":"Billy", //type: String,required
   "email":"billy.villy@mail.com", //  type: String, required
   "phone":"32587542" //  type: String, required
   "favorite":true // type: Boolean, default:false
   }
```

- ### Delete Contact by ID
  #### **DELETE**​ /api/contacts/:contactId

```sh
Example: "/contacts/dfhbsdfcasbdw2e13e"
```

- ### Update Favorite field on Contact by ID
  #### **PATCH**​ /api/contacts/:contactId/favorite

```sh
Example:
body: {
  "favorite":true // type: Boolean,  required
  }
```
