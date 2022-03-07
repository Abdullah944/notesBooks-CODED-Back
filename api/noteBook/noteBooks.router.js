//? Express
const express = require("express");
//? Import Controllers
const {
  fetchNoteBook,
  createNoteBook,
  deleteNoteBook,
  UpdateNoteBook,
} = require("./noteBooks.controllers");

//? Set Router
const noteBooksRouter = express.Router();

//? Params Middleware
// noteBooksRouter.param("noteBookID", async (req, res, next, noteBookID) => {
//   const noteBook = await fetchNoteBook(noteBookID, next);
//   req.noteBook = noteBook;
//   next();
// });

//? Assign Router to Controllers
noteBooksRouter.get("/api/noteBook", fetchNoteBook);
noteBooksRouter.post("/api/noteBook", createNoteBook);
noteBooksRouter.delete("/api/noteBook/:noteBookID", deleteNoteBook);
noteBooksRouter.put("/api/noteBook/:noteBookID", UpdateNoteBook);

//? Export Router
module.exports = noteBooksRouter;

//?  HOW make a routers:
// 1- import express.
// 2- import the function that's will been used (Controllers).
// 3- import router from express.router to use router (Set Router).
// 4- (Assign Router to Controllers)make a of : router.post(create - sigin -signup) - router.delete(delete)-router.put(update)-router.get(get/fetch data).
// 5- export the module to use it in the app.js(Export Router).

//? steps to practice (for best practice understand and write it by your self):
// 1- make new routers.
