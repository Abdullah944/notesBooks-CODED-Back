//? Express
const express = require("express");
//? Import Controllers
const { getNote, createNote, deleteNote } = require("./notes.controllers");
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

//? Export Router
module.exports = notesRouter;

// shop = notesBook
// product = note
