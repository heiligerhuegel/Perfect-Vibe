const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roadSchema = new Schema({
  userID: { type: Schema.Types.ObjectId, ref: "User" },
  userName: { type: String },
  name: { type: String, required: true },
  description: { type: String, required: true },
  country: { type: String, required: true },
  length: { type: Number, required: true },
  image: [],
  waypoints: [[]],
});

const Road = mongoose.model("Road", roadSchema);

module.exports = Road;
