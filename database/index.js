// mongoose:
const mongoose = require("mongoose");
// .env use:
const dotenv = require("dotenv");
dotenv.config();

//? Mostly it's COPY PASTE:

// make DB connection:
const connectDB = async () => {
  const PASSWORD = process.env.PASSWORD;
  const DATABASE_NAME = process.env.DATABASE_NAME;
  // from MongoDB site:
  const connectionUrl = `mongodb+srv://Abdullah:${PASSWORD}@cluster0.az5lr.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

  const conn = await mongoose.connect(connectionUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;

//? steps to practice (for best practice understand and write it by your self):
// 1- make .env file.
// 2- connect DB
