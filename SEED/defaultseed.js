require("dotenv").config();
const mongoose = require("mongoose");
const Road = require("./../models/road.schema");

const roads = [
  {
    user: "heiligerhuegel",
    name: "90 Mile Streight",
    description: "Longest streight street in Australia",
    country: "Australia",
    length: 146.6,
    image: "",
    startX: -32.26998990587195,
    startY: 125.48335971305639,
    endX: -32.45478173412803,
    endY: 123.94427605526317,
    waypoints: [],
  },

  {
    user: "heiligerhuegel",
    name: "Alice Springs Kings Canyopn",
    description: "From the middle of nowhere to the middle of nowhere!",
    country: "Australia",
    length: 328,
    image: "",
    startX: -23.701653902541953,
    startY: 133.84850435003835,
    endX: -24.25543703775569,
    endY: 131.56858373696005,
    waypoints: [],
  },

  {
    user: "heiligerhuegel",
    name: "Holzgerlingen to Lake Konstanz",
    description:
      "From Holzgerlingen to the Lake Konstanz on the Autobahn with a lot of Unlimited speed areas.",
    country: "Germany",
    length: 128,
    image: "",
    startX: 48.63421962166325,
    startY: 9.017891034367839,
    endX: 47.81633112395074,
    endY: 8.844856379119655,
    waypoints: [],
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to the database!");
    // 2. Drop the DB
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    console.log("Database dropped!");
    return Road.create(roads);
    // forwards the promise to the next `then`
  })
  .then((data) => {
    console.log(`Inserted ${data.length} books`); // Inserted 10 books
    return mongoose.connection.close();
  })
  .then(() => {
    console.log("Database connection closed!");
  })
  .catch((err) => {
    console.log(err);
  });
