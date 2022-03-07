// TODO> 1- import/ require the schema to use it.
const User = require("../../database/models/User");
// for hashing the password:
const bcrypt = require("bcrypt");
// Authorization / token:
const jwt = require("jsonwebtoken");
// make file to keep the return password keys:
const { keys } = require("../../config/keys"); // we use .env here.
// to use env file (JWT_EXPIRATION_MS - JWT_SECRET):
const dotenv = require("dotenv");
dotenv.config();

// TODO signup:
exports.signup = async (req, res, next) => {
  try {
    // PASSWORD:
    const { password } = req.body; // take the password from the body.
    const saltRounds = 10; // power of password.
    req.body.password = await bcrypt.hash(password, saltRounds);

    //Create new user:
    const newUser = await User.create(req.body);
    const payload = {
      _id: newUser._id,
      username: newUser.username,
      exp: Date.now() + process.env.JWT_EXPIRATION_MS, //3 hour
    };

    // make TOKEN for user:
    const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

// TODO signin:
exports.signin = async (req, res, next) => {
  const user = req.user; //  req.user = all data of the user that been taken from the local strategy middleware.

  const payload = {
    _id: user._id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    exp: Date.now() + process.env.JWT_EXPIRATION_MS,
  };

  // make sure TOKEN for user:
  const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET);
  res.status(201).json({ token });
};

//? Steps for this file:
//?--------------------------
//? 1- add the schemas that you will use.
//? 2- make the methods to use in the routers.

// MORE INFO :
// 1- saltRound = how much time is needed to calculate a
//  single BCrypt hash. The higher the cost factor,
//  the more hashing rounds are done.

//? steps to practice:
//? 1- make a sigin in method:
//? 2- make a signup method:
