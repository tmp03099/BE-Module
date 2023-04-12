const mongoose = require("mongoose");

//create schema
const veggieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  type: { type: String, required: true },
  isReadyToEat: Boolean,
});

//create a new model
const Vegetable = mongoose.model("Vegetable", veggieSchema);

module.exports = Vegetable;
