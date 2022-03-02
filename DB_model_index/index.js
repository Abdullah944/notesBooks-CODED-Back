const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const PASSWORD = process.env.PASSWORD;
  const DATABASE_NAME = process.env.DATABASE_NAME;
  const connectionUrl = `mongodb+srv://Abdullah:${PASSWORD}@cluster0.az5lr.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;

  const conn = await mongoose.connect(connectionUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
