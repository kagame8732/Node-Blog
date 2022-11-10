let express = require("express");
let app = express();
let morgan = require("morgan");
let mongoose = require("mongoose");
let blogController = require("./controllers/blogController");
let blogRoutes = require("./routes/blogRoutes");

let dbURI =
  "mongodb+srv://kalex:test1234@nodeapp.5s3agtv.mongodb.net/nodeApp?retryWrites=true&w=majority";
mongoose
  .connect(dbURI)
  .then((results) => app.listen(3000))
  .catch((err) => console.log(err));

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/create", blogController.blog_create_get);

app.use(blogRoutes);

app.use((req, res) => {
  res.render("404", { title: "Not found" });
});
