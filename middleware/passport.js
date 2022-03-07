// User Scheme:
const User = require("../database/models/User");
// hash the password:
const bcrypt = require("bcrypt");
// user the BearerToken token and decode or compare the user code to input code:
const JWTStrategy = require("passport-jwt").Strategy;
const { fromAuthHeaderAsBearerToken } = require("passport-jwt").ExtractJwt;

const LocalStrategy = require("passport-local").Strategy;
// local Strategy function:
exports.localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    // find the user by username:
    const user = await User.findOne({ username: username });
    //compare passwords:
    const passwordsMatch = user
      ? await bcrypt.compare(password, user.password)
      : false;

    passwordsMatch ? done(null, user) : done(null, false);
  } catch (error) {
    done(error);
  }
});
//  JWTStrategy function:

exports.jwtStrategy = new JWTStrategy(
  {
    jwtFromRequest: fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
  },
  async (jwtPayload, done) => {
    if (Date.now() > jwtPayload.exp) {
      done(null, false);
    }
    try {
      const user = await User.findById(jwtPayload._id);
      user ? done(null, user) : done(null, false);
    } catch (error) {
      done(error);
    }
  }
);

//? MORE INFO: 1- fromAuthHeaderAsBearerToken = BearerToken for making token.

// steps to practice (for best practice understand and write it by your self):
// 1- make JWTStrategy function:
// 2- // local Strategy function:
