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

// steps to practice:
