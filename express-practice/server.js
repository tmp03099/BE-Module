//import or load the express module
const express = require("express");

//create an instance of the express app
const app = express();

// ==== Define our routes

// ===== Routes

//root or main route
app.get("/", function (req, res) {
  //use the response obj to send back some data
  res.send("<h1>Hello World</h1>");
});

// '/home' route
app.get("/home", function (req, res) {
  //use the response obj to send back some data
  res.send("<h1>Home Page</h1>");
});

//send back some data to web
app.get("/cars", function (req, res) {
  res.send("Here's a list of my cars....");
});

app.post("/cars", function (req, res) {
  res.send("Thanks for the new car!....");
});

//start to listen for requests by pass the port number and a call back function
app.listen(3000, function () {
  console.log("Server is listening and runing on port 3000");
});
