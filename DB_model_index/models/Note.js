const { Schema, model } = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const NoteSchema = new Schema({
  name: String,
  description: String,
  slug: String,
  NoteBook: {
    type: Schema.Types.ObjectId,
    ref: "NoteBook",
  },
});

NoteSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = model("Note", NoteSchema);
