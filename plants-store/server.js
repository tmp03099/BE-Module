// Require modules
const express = require("express");

// Create the Express app
const app = express();

// Configure the app (app.set)

// Mount middleware (app.use)
const plants = [
  "Monstera Deliciosa",
  "Corpse Flower",
  "Elephant-Foot Yam",
  "Witches'Butter",
];

// Mount routes
app.get("/", function (req, res) {
  //   res.send("<h1>Hello World!</h1>");
  res.send(plants);
});

app.get("/:indexOfPlantArray", (req, res) => {
  console.log(req.params);
  console.log(plants[req.params.indexOfPlantArray]);

  //check if your data request have in array (database) if have return value if not get the message
  if (plants[req.params.indexOfPlantArray]) {
    res.send(plants[req.params.indexOfPlantArray]);
  } else {
    res.send("No plants at index:" + req.params.indexOfPlantArray);
  }
});

// Tell the app to listen on port 3000
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
