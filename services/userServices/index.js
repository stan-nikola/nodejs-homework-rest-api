const { logInUser } = require("./logInUser");
const { signUpUser } = require("./signUpUser");
const { logOutUser } = require("./logOutUser");
const { currentUser } = require("./currentUser");

module.exports = { signUpUser, logInUser, logOutUser, currentUser };
