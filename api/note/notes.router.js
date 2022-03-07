//? Express
const express = require("express");
//? Import Controllers
const {
  getNote,
  createNote,
  deleteNote,
  updateNote,
} = require("./notes.controllers");

//? to use upload from multer middleware:
const upload = require("../../middleware/multer");

//? Set Router
const notesRouter = express.Router();

//? Params Middleware
// productsRouter.param("productId", async (req, res, next, productId) => {
//   const product = await fetchProduct(productId, next);
//   req.product = product;
// if (product) req.product = product;
// else {
// 	const err = new Error("Product not found");
// 	err.status = 404;
// 	next(err);
// }

// });
//? Assign Router to Controllers
notesRouter.get("/api/note", getNote);
notesRouter.post("/api/note/:noteBookID/noteBook", createNote);
notesRouter.delete("/api/note/:noteID", deleteNote);
notesRouter.put("/api/note/:noteID", updateNote);

//? Export Router
module.exports = notesRouter;

//?  HOW make a routers:
// 1- import express.
// 2- import the function that's will been used (Controllers).
// 3- import router from express.router to use router (Set Router).
// 4- (Assign Router to Controllers)make a of : router.post(create - sigin -signup) - router.delete(delete)-router.put(update)-router.get(get/fetch data).
// 5- export the module to use it in the app.js(Export Router).

//? steps to practice (for best practice understand and write it by your self):
// 1- make new routers.
