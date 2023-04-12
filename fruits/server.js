require("dotenv").config(); // call and configure your dotenv package
//Require modules
const express = require("express");
const mongoose = require("mongoose");

//import fruits Data
const fruits = require("./models/fruits");
const Fruit = require("./models/Fruit");

//create the express app
const app = express();
const port = 3000;

// ? Config views
app.set("view engine", "jsx"); //jsx file
//using third parties require instead of our own create
app.engine("jsx", require("jsx-view-engine").createEngine());

//? Middleware
//setting a middleware to run in our app
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
//parses the data fromt the request
app.use(express.urlencoded({ extended: false }));

//? Create route
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

/**
 * Index Route : (return a list of fruits)
 */

app.get("/fruits", (req, res) => {
  // res.send(fruits);
  // res.render("Index", { fruits: fruits });
  Fruit.find({}, (error, allFruits) => {
    res.render("fruits/Index", { fruits: allFruits });
  });
});

/**
 * POST method (accept data from the form)
 */
app.post("/fruits", (req, res) => {
  if (req.body.readyToEat === "on") {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // fruits.push(req.body);
  //* send to MongoDB
  Fruit.create(req.body, (error, createdFruit) => {
    // res.send(createdFruit);
    res.redirect("/fruits");
  });
});

/**
 * New Route : (return a form to create a new fruit)
 */

app.get("/fruits/new", (req, res) => {
  res.render("fruits/New");
});

/**
 * Show route: (returns an single fruit)
 */

app.get("/fruits/:id", (req, res) => {
  console.log(req.params);
  // res.send(fruits[req.params.indexOfFruitArray]);
  // res.render("Show", { fruit: fruits[req.params.indexOfFruitArray] });
  Fruit.findById(req.params.id, (error, foundFruit) => {
    res.render("fruits/Show", { fruit: foundFruit });
  });
});

//if none of the routes matches the request will show 404 page
app.get("*", (req, res) => {
  //res.redirect('/fruits')
  res.render("404");
});

app.listen(3000, function () {
  console.log(`Listening on port ${port}`);

  //get the warning message out
  mongoose.set("strictQuery", true);
  //! connect to mongodbB
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB!");
  });
});
