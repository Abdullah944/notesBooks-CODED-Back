// TODO> 1- import/ require the schema to use it.
const NoteBook = require("../../DB_model_index/models/NoteBook");

// TODO> <Fetch/Get> noteBooks Func :

exports.fetchNoteBook = async (req, res, next) => {
  try {
    const noteBooks = await NoteBook.find(); // TODO> find all the noteBooks.
    //TODO>  if you find it give it back to me:
    res.json(noteBooks);
  } catch (error) {
    next(error);
  }
};
// TODO> <Create> noteBooks Func :
exports.createNoteBook = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `${req.file.path}`;
    }
    const noteBook = req.body; //  req.body = allows you to access data in a string or JSON object <From> the <Client> side.
    const createdNoteBook = await NoteBook.create(noteBook);
    res.status(200).json({ msg: "NoteBook Created", payload: createdNoteBook });
  } catch (error) {
    next(error);
  }
};
// TODO> <Delete> noteBooks Func :
exports.deleteNoteBook = async (req, res, next) => {
  const { noteBooksID } = req.params; // take the params given by the user => google.com/1 <=
  const foundNotebook = await NoteBook.findByIdAndDelete(noteBooksID); // if the id's of schema &== params id  => delete it.
  try {
    if (foundNotebook) {
      res.status(204).end(); //delete it (end).
    } else {
      res.status(404).json({ msg: "Note Book Not Found" });
    }
  } catch (error) {
    next(error);
  }
};

// exports.productUpdate = async (req, res, next) => {
//     try {
//       if (req.file) {
//         req.body.image = `/${req.file.path}`;
//         req.body.image = req.body.image.replace("\\", "/");
//       }
//       const product = await Product.findByIdAndUpdate(
//         { _id: req.product._id },
//         req.body,
//         { new: true, runValidators: true } // returns the updated product
//       );
//       res.json(product);
//     } catch (error) {
//       next(error);
//     }
//   };
