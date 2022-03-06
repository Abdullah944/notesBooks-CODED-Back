const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const UserSchema = new Schema(
  {
    username: String,
    password: String,
    slug: String,
    firstName: String,
    lastName: String,
  },

  {
    timestamps: true,
  }
);

UserSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%=>" });
module.exports = model("User", UserSchema);

// ref:
// const UserScheema = new Schema({
// 	username: {
// 		type: String,
// 		required: true,
// 		unique: true,
// 	},
// 	password: {
// 		type: String,
// 		required: true,
// 	},
// 	email: {
// 		type: String,
// 		trim: true,
// 		lowercase: true,
// 		unique: true,
// 		required: "Email address is required",
// 		validate: [validateEmail, "Please fill a valid email address"],
// 		match: [
// 			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
// 			"Please fill a valid email address",
// 		],
// 	},
// 	firstName: String,
// 	lastName: String,
// });
// steps:
