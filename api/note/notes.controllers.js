// TODO> 1- import/ require the schema to use it.
const Note = require("../../database/models/Note");
const NoteBook = require("../../database/models/NoteBook");

// TODO> <Fetch/Get> noteBooks Func :
exports.getNote = async (req, res, next) => {
  try {
    const notes = await Note.find(); // find all.
    res.json(notes); // respond all.
  } catch (error) {
    next(error);
  }
};
// TODO> <Create> noteBooks Func :
exports.createNote = async (req, res, next) => {
  try {
    const { noteBookID } = req.params; // take noteBookID.

    req.body.note = noteBookID; // all the note = noteBookID params.
    const note = req.body; // note will take all the data in it.
    const createdNote = await Note.create(note); // creation method> from the big NOTE create the small note in it.

    //after creation find from the big NOTE ID and on this id(noteBookID) and <push> in it the note(from schema) in the created note with id.
    await NoteBook.findByIdAndUpdate(noteBookID, {
      $push: { note: createdNote._id },
    });
    res
      .status(201)
      .json({ msg: "Note Created successfully", createdNote: createdNote });
  } catch (error) {
    next(error);
  }
};

// TODO> <Delete> noteBooks Func :
exports.deleteNote = async (req, res, next) => {
  try {
    const { noteID } = req.params; // take the noteID from the params(:noteID) in the routers path you put.
    await Note.findByIdAndDelete(noteID); // from the big NOTE find the noteID with the params noteID and delete it.
    res.status(204).end(); // remove it from all places.
  } catch (error) {
    next(error);
  }
};

// TODO <Update> noteBook Func :
exports.updateNote = async (req, res, next) => {
  try {
    const { noteID } = req.params; // take the noteID from the params(:noteID) in the routers path you put.
    const note = req.body;
    const updatedNote = await Note.findByIdAndUpdate(noteID, note, {
      runValidators: true,
      new: true,
    });
    res.status(200).json({
      msg: "Note Updated successfully",
      payload: updatedNote,
    });
  } catch (error) {
    next(error);
  }
};

//? Steps for this file:
//?--------------------------
//? 1- add the schemas that you will use.
//? 2- make the methods to use in the routers.

// steps to practice:
