//Require modules
const express = require("express");

//import fruits Data
const fruits = require("./models/fruits");

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
  res.render("Index", { fruits: fruits });
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
  fruits.push(req.body);
  res.redirect("./fruits");
});

/**
 * New Route : (return a form to create a new fruit)
 */

app.get("/fruits/new", (req, res) => {
  res.render("New");
});

/**
 * Show route: (returns an single fruit)
 */

app.get("/fruits/:indexOfFruitArray", (req, res) => {
  console.log(req.params);
  // res.send(fruits[req.params.indexOfFruitArray]);
  res.render("Show", { fruit: fruits[req.params.indexOfFruitArray] });
});

//if none of the routes matches the request will show 404 page
app.get("*", (req, res) => {
  //res.redirect('/fruits')
  res.render("404");
});

app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
