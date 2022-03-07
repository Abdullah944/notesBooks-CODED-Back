const express = require("express");
const { signup, signin } = require("../../api/user/user.controllers");
const passport = require("passport");

//? Set Router
const router = express.Router();

//? sign in :
router.post = ("/api/user/signup", signup);

//? sign up :
router.post =
  ("/api/user/signin",
  passport.authenticate("local", { session: false }),
  signin);
module.exports = router;

//?  HOW make a routers:
// 1- import express.
// 2- import the function that's will been used.(Controllers)
// 3- import router from express.router to use router.
// 4- (Assign Router to Controllers)make a of : router.post(create - sigin -signup) - router.delete(delete)-router.put(update)-router.get(get/fetch data).
// 5- export the module to use it in the app.js(Export Router).

//? steps to practice (for best practice understand and write it by your self):
// 1- make new routers.
