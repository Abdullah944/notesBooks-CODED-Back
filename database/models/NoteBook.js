const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const NoteBookSchema = new Schema(
  {
    name: String,
    description: String,
    slug: String,
    note: [
      {
        type: Schema.Types.ObjectId,
        ref: "Note",
      },
    ],
  },
  {
    timestamps: true,
  }
);

NoteBookSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%=>" });
module.exports = model("NoteBook", NoteBookSchema);

// make a schema:
// 1- declare it with const  + use the new keyWord.
// 2= put what info inside.
// 3- export it.

// steps to practice:
