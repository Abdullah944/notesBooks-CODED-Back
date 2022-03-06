const express = require("express");
const { signup, signin } = require("../../api/user/user.controllers");
const router = express.Router();
const passport = require("passport");

router.post = ("/api/user/signup", signup);
usersRouter.post(
  "/api/user/signin",
  passport.authenticate("local", { session: false }),
  signin
);
module.exports = router;

// steps:
