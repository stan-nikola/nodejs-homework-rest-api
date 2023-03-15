/* eslint-disable no-undef */
const express = require("express");
const request = require("supertest");
require("dotenv").config();

const { connectToContactsDb } = require("../models");
const {
  logInController,
} = require("../controllers/authControllers/logInController");

const { NotAuthorizedError } = require("../helpers");

const app = express();

app.use(express.json());

app.post("/api/users/login", logInController);

describe("controllers test", () => {
  beforeAll(async () => {
    await connectToContactsDb()
      .then(async () => {
        console.log("Database connection successful");
        app.listen(3003);
      })
      .catch((err) => {
        console.log(`Database connection error:${err.message}`);
      });
  });

  // afterAll(() => app.close());

  it("logInController return token and 3 string fields", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "emerleite@gmail.com",
      password: "123456",
    });

    const { email, subscription, avatarURL } = response.body.user;
    const { token } = response.body;

    expect(response.status).toBe(200);
    expect(typeof token).toEqual("string");
    expect(Object.keys(response.body.user).length).toBe(3);
    expect(typeof email).toEqual("string");
    expect(typeof subscription).toEqual("string");
    expect(typeof avatarURL).toEqual("string");
  });

  it("logInController bad request error", () => {
    request(app).post("/api/users/login").send({
      // email: "emerleite@gmail.com",
      password: "123456",
    });

    expect(() => NotAuthorizedError()).toThrow();
  });

  it("logInController authorization error", () => {
    request(app).post("/api/users/login").send({
      email: "emerleite@gmail.com",
      password: "12345",
    });

    expect(() => NotAuthorizedError()).toThrow();
  });
});
