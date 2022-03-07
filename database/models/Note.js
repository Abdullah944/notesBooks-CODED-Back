const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const NoteSchema = new Schema(
  {
    name: String,
    description: String,
    slug: String,
    noteBook: {
      type: Schema.Types.ObjectId,
      ref: "NoteBook",
    },
  },
  {
    timestamps: true,
  }
);

NoteSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Note", NoteSchema);

//?  HOW make a schema:
// 1- declare it with const  + use the new keyWord.
// 2= put what info inside.
// 3- export it.

//? steps to practice (for best practice understand and write it by your self):
// 1- make new schema.
