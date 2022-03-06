# notesBooks-CODED-Back (it's a good ref):

## BackEnd Steps:

 ## A- make folders & files:
1- create api folder that have inside it folders of routers(EX:Assign Router to Controllers EX:(productsRouter.get("/", fetchProductsController) & controllers(EX:<Fetch/Get> noteBooks method (all methods inside)).

2- create data base folder that have models inside it(Schemas) , & index file (to connect to data base mongoose & to use mangoDB compass app).

3- create middleware folder. EX(multer for using images & passport for using Authentication)

4- add media folder to put the img in it.

5- make app.js the "main" in the package.json.

  -------------------------------------------------------------------------------------------------------
 ## B- connect to your DB:
- make mangoDB account.

- go to : Atlas(create new Cluster)> connect(connect your app , take the link a & use it in the index.js(don't forget to change (DB name & password )))>

- make the template code copy paste from the site(with the changes).

- add .env file to make it hidden .
  
  -------------------------------------------------------------------------------------------------------
 ## C- add dependencies & use them:
- install express.>>DO(handlers for requests & more) Link(https://expressjs.com/).

- install dotenv.>>DO(loads environment variables from a .env file) Link(https://www.npmjs.com/package/dotenv).
- steps:(https://www.mariokandut.com/how-to-set-up-and-test-a-dot-env-file-in-node-js/)

- install mongoose.>>DO(Mongoose provides a straight-forward, schema-based solution to model your application data.) Link(https://mongoosejs.com/).

- install sequelize-slugify.>>DO(create and update unique slugs) Link(https://www.npmjs.com/package/sequelize-slugify).

- install slugify.>>DO(make a word slug shape) Link(https://www.npmjs.com/package/slugify).

- install multer. >>DO(handling multipart/form-data) Link(https://www.npmjs.com/package/multer).

- install mongoose-slug-plugin.>>DO(Slugs for Mongoose ) Link(https://www.npmjs.com/package/mongoose-slug-plugin)

- install cors.>>DO(providing a Connect/Express middleware) Link(https://www.npmjs.com/package/cors).

- install nodemon.>>DO(to make the server update with every save) Link(https://www.npmjs.com/package/nodemon) Add this to package.json("start": "nodemon app.js ") under "scripts".

- install jwt >> DO(Authorization / token -signin signup) Link(https://www.npmjs.com/package/jsonwebtoken).

- install bcrypt >> DO(hash password) Link(https://www.npmjs.com/package/bcrypt).

-  install passport >> DO(authentication middleware ) Link(https://www.npmjs.com/package/passport).
  -------------------------------------------------------------------------------------------------------
 ## D- General Explanations :
- import in BackEnd : const express = require("express");

- to use the import : app.use(cors()); In app.js.
 
- to use the "urlencoded" body input in post man add this in the app.js : app.use(express.urlencoded({ extended: true }));

- express.Router() : how an application’s endpoints (URIs) respond to client requests.

- async & await : wait for specific line to run then the other to get information> (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function).

- next() : use for handle error and go to the next line or error > (https://expressjs.com/en/guide/error-handling.html).

- Declare & Set Router : const noteBooksRouter = express.Router(); : to use it for the routers(post - get - delete).

- export Routers to use it in the app.js : EX: module.exports = noteBooksRouter; 

- .populate("note") > use populate to get all data instead of the id only.



  -------------------------------------------------------------------------------------------------------
## Example Schema :

- const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		lowercase: true,
		unique: true,
		required: "Email address is required",
		validate: [validateEmail, "Please fill a valid email address"],
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			"Please fill a valid email address",
		],
	},
	firstName: String,
	lastName: String,
});

module.exports = model("User", UserSchema);

-------------------------------------------------------------------------------------------------------
## Example GET / FETCH Method:
### controller GET/ Fetch :

- import/ require the schema to use it.
const NoteBook = require("where the file located");

- //<Fetch/Get> noteBooks Func :

exports.fetchNoteBook = async (req, res, next) => {
  try {
    const noteBooks = await NoteBook.find(); // find all the noteBooks.
- // if you find it give it back to me:
    res.json(noteBooks);

  } catch (error) {
    next(error);
  }
};
## router Get :
### Assign Router to Controllers:
noteBooksRouter.get("/", fetchNoteBook);

-------------------------------------------------------------------------------------------------------
## Example Create Method :
### controller Create :
- import/ require the schema to use it.
const NoteBook = require("where the file located");

- // <Create> noteBooks Func :
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
## router Get :
### Assign Router to Controllers:
noteBooksRouter.post("/api/noteBook", createNoteBook);

-------------------------------------------------------------------------------------------------------
## Example Delete Method :
### controller Delete :
- import/ require the schema to use it.
const NoteBook = require("where the file located");

 - // <Delete> noteBooks Func :
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
## router Get :
### Assign Router to Controllers:
noteBooksRouter.delete("/api/noteBook/:noteBooksID", deleteNoteBook);

-------------------------------------------------------------------------------------------------------
## Example Update Method :
### controller Update :
-  import/ require the schema to use it.
const NoteBook = require("where the file located");

- // <Update> noteBook Func:
exports.NoteBookUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = `/${req.file.path}`;
      req.body.image = req.body.image.replace("\\", "/");
    }
    const NoteBook = await NoteBook.findByIdAndUpdate(
      { _id: req.NoteBook._id },
      req.body,
      { new: true, runValidators: true } // returns the updated NoteBook
    );
    res.json(NoteBook);
  } catch (error) {
    next(error);
  }
};
## router Get :
### Assign Router to Controllers:
noteBooksRouter.post("/api/noteBook/:noteBooksID", NoteBookUpdate);

-------------------------------------------------------------------------------------------------------
 ## F- optional : connect repo to GitHub:

- create a new repository on the command line::

- echo "# <name of your repo>" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin git@github.com:<URL LINK HERE>
- git push -u origin main

- push an existing repository from the command line::

- git remote add origin git@qithub.com: <URL LINK HERE>
- git branch -M main
- git push -u oriqin main

### To add files and push them (after connecting them):
- git add .
- git commit -m "describe the thing been done"
- git push

### using branches :
- git branch <name of the brach>    = make branch.
- git switch <name of the branch>    = switch branch.
- git add .
- git commit -m "done"
- git  push            -------   git push --set-upstream origin branch name.
- GO github = pull / merge / && resolve conflict  / delete branch.
- git fetch  = take all the pull requests  .
- git pull     = pull all changes.
- git branch -d  <name of branch>       = delete brach locality . 
- git checkout -b <branch name>.  = make branch and go in it.

-------------------------------------------------------------------------------------------------------
 ## F- optional 2 : use npms:

### npm all in one line:>>    npm i express dotenv mongoose sequelize-slugify slugify multer cors jsonwebtoken bcrypt passport   <<

 - npm install =  npm i       = install all
 - npm i express
 - npm i dotenv                     
 - npm i mongoose
 - npm i sequelize-slugify
 - npm i slugify
 - npm i multer
 - npm i cors
 - npm i -g nodemon
 - npm i jsonwebtoken 
 - npm i bcrypt
 - npm i passport

-------------------------------------------------------------------------------------------------------
