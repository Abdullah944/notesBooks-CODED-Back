// TODO> 1- import/ require the schema to use it.
const Note = require("../../DB_model_index/models/Note");
const NoteBook = require("../../DB_model_index/models/NoteBook");

// TODO> <Fetch/Get> noteBooks Func :
exports.getNote = async (req, res, next) => {
  try {
    const notes = await Note.find(); //step1 find all.
    res.json(notes); //step2 respond all.
  } catch (error) {
    next(error);
  }
};
// TODO> <Create> noteBooks Func :
exports.createNote = async (req, res, next) => {
  try {
    const { noteBookID } = req.params; // take noteBookID

    req.body.note = noteBookID;
    const note = req.body;
    const createdNote = await Note.create(note);

    await NoteBook.findByIdAndUpdate(noteBookID, {
      $push: { note: createdNote._id },
    });
    res.status(201).json({ msg: "Note Created", createdNote: createdNote });
  } catch (error) {
    next(error);
  }
};
// TODO> <Delete> noteBooks Func :
exports.deleteNote = async (req, res, next) => {
  try {
    const { noteID } = req.params;
    await Note.findByIdAndDelete(noteID);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
// TODO <Update> noteBook Func TODO:fix it last thing is *null*:
// exports.updateProductController = async (req, res, next) => {
//     try {
//       if (req.file) {
//         req.body.image = `${req.file.path}`;
//       }
//       const id = req.product._id;
//       const product = req.body;
//       const updatedProduct = await Product.findByIdAndUpdate(id, product, {
//         runValidators: true,
//         new: true,
//       });
//       res.status(200).json({
//         msg: "Product Updated",
//         payload: updatedProduct,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };
