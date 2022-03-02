const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const Note = new NoteSchema({
  name: String,
  description: String,
  slug: String,
  NoteBook: {
    type: Schema.Types.ObjectId,
    ref: "NoteBook",
  },
});

ShopsSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Note", NoteSchema);
