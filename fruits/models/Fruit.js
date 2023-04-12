const mongoose = require("mongoose");

//schema is blueprint of props
const fruitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  readyToEat: Boolean,
});

// Mongoose Model
const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
