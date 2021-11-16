const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const road = new Schema({
  user: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true },
  length: { type: Number, required: true },
  image: { type: String, required: true },
  startX: { type: Number, required: true },
  startY: { type: Number, required: true },
  endX: { type: Number, required: true },
  endY: { type: Number, required: true },
  waypoints: [{ type: Number, type: Number }],
});

module.exports = road;
