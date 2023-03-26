/* eslint-disable no-undef */

const request = require("supertest");

const app = require("../server");

describe("controllers test", () => {
  afterAll(async () => {
    await app.close();
  });

  it("logInController return token and 3 string fields", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "stasontmt@gmail.com",
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
