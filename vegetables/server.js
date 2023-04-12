//! first
// call and config dotenv
require("dotenv").config();

// modules
const express = require("express");
const mongoose = require("mongoose");

//import vegetables Data
const vegetables = require("./models/vegetables");
const Vegetable = require("./models/Vegetable");

// create express app
const app = express();
const PORT = 3000;

//! Four
// * Config views
app.set("view engine", "jsx"); //jsx file
//using third parties require instead of our own create
app.engine("jsx", require("jsx-view-engine").createEngine());

//* Middleware
//setting a middleware to run in our app
app.use((req, res, next) => {
  console.log(req.url);
  next();
});
//parses the data fromt the request
app.use(express.urlencoded({ extended: false }));

//! third
//* Create default route
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

// ! last
// * Create the other route
//? Index route :  return a list of vegetables
app.get("/vegetables", (req, res) => {
  // res.render("vegetables/Index", { vegetables: vegetables });
  Vegetable.find({}, (error, allVeggies) => {
    res.render("vegetables/Index", { vegetables: allVeggies });
  });
});

//? POST method
app.post("/vegetables", (req, res) => {
  if (req.body.isReadyToEat === "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }

  console.log(req.body);
  //*push data to MongoDB
  Vegetable.create(req.body, (error, createdVeggie) => {
    res.redirect("/vegetables");
  });
});

//? New route: return a form for user create a new veggie
app.get("/vegetables/new", (req, res) => {
  res.render("vegetables/New");
});

//? Show Route: return a single fruit
app.get("/vegetables/:id", (req, res) => {
  console.log(req.params);
  // res.render("Vegetable", { vegetable: vegetables[req.params.id] });
  Vegetable.findById(req.params.id, (error, foundVeggie) => {
    res.render("vegetables/Show", { vegetable: foundVeggie });
    // res.send(foundVeggie);
  });
});

//? Error Route
app.get("*", (req, res) => {
  //res.redirect('/fruits')
  res.render("404");
});

//! second
app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);

  //get the warning message out
  mongoose.set("strictQuery", true);
  //* connect to mongodb
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
  });
});
