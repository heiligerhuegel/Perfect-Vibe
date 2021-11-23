const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roadSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  userName: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: false },
  country: { type: String, required: false },
  length: { type: Number, required: true },
  duration: { type: Number, required: true },
  image: [],
  waypoints: [[{ type: Number }, { type: Number }]],
});

const Road = mongoose.model("Road", roadSchema);

module.exports = Road;
