// TODO> 1- import/ require the schema to use it.
const User = require("../../database/models/User");
// for hashing the password:
const bcrypt = require("bcrypt");
// Authorization / token:
const jwt = require("jsonwebtoken");
// make file to keep the return password keys:
const { keys } = require("../../config/keys");
// to use env file (JWT_EXPIRATION_MS - JWT_SECRET):
const dotenv = require("dotenv");
dotenv.config();

// TODO signup:

exports.signup = async (req, res, next) => {
  try {
    const { password } = req.body;
    const saltRounds = 10;
    req.body.password = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create(req.body);
    const payload = {
      _id: newUser._id,
      username: newUser.username,
      exp: Date.now() + process.env.JWT_EXPIRATION_MS, //3 hour
    };
    const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET);
    req.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

// TODO signin:
exports.signin = (req, res, next) => {
  const user = req.user;

  const payload = {
    _id: user._id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    exp: process.env.JWT_EXPIRATION_MS,
  };

  const token = jwt.sign(JSON.stringify(payload), keys.JWT_SECRET);

  res.status(201).json({ token });
};

//? Steps for this file:
//?--------------------------
//? 1- add the schemas that you will use.
//? 2- make the methods to use in the routers.
