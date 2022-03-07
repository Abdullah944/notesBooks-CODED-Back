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

//?  HOW make a schema:
// 1- declare it with const  + use the new keyWord.
// 2= put what info inside.
// 3- export it.

//? steps to practice (for best practice understand and write it by your self):
// 1- make new schema.
