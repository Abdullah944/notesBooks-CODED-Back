//? Imports
const express = require("express");
const connectDB = require("./DB_model_index/index");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();

const app = express();
app.use(cors());

//? Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//! use img:
app.use((req, res, next) => {
  console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.path}`);
  next();
});

//? Router
// TODO : 1- call the routers & func for both:
// to use notesBook routers & func:
const noteBooksRouter = require("./api/noteBook/noteBooks.router");
app.use("/", noteBooksRouter);
// to use notes routers & func:
const notesRouter = require("./api/note/notes.router");
app.use("/", notesRouter);

// use img:
app.use("/media", express.static(path.join(__dirname, "media")));

//? Error handler Middleware
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ msg: err.message || "Internal Server Error" }); // TODO> if you name msg you use it everywhere like this:
  next();
});

//? Not Found Middleware
app.use((req, res, next) => {
  res.status(404).json({ msg: "Path Not Found" });
});

//? PORT and Listen
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`The application is running on ${PORT}`);
  connectDB();
});
