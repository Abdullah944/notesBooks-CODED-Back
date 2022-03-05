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
