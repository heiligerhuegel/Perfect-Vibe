require("dotenv/config");
const mongoose = require("mongoose");
const Road = require("./../models/road.model");

const roads = [
  {
    userID: "619b7d5a179a75c24b883f0e",
    userName: "heiligerhuegel",
    name: "90 Mile Streight",
    description: "Longest streight street in Australia",
    country: "Australia",
    distance: 146.6,
    image: [],
    waypoints: [
      [-32.26998990587195, 125.48335971305639],
      [-32.45478173412803, 123.94427605526317],
    ],
  },

  {
    userID: "619b7d5a179a75c24b883f0e",
    userName: "heiligerhuegel",
    name: "Alice Springs Kings Canyopn",
    description: "From the middle of nowhere to the middle of nowhere!",
    country: "Australia",
    distance: 328,
    image: [],
    waypoints: [
      [-23.701653902541953, 133.84850435003835],
      [-24.25543703775569, 131.56858373696005],
    ],
  },

  {
    userID: "619b7d5a179a75c24b883f0e",
    userName: "heiligerhuegel",
    name: "Holzgerlingen to Lake Konstanz",
    description:
      "From Holzgerlingen to the Lake Konstanz on the Autobahn with a lot of Unlimited speed areas.",
    country: "Germany",
    distance: 128,
    image: [],
    waypoints: [
      [48.63421962166325, 9.017891034367839],
      [47.81633112395074, 8.844856379119655],
    ],
  },
];

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    //console.log("Connected to the database!");
    // 2. Drop the DB
    return mongoose.connection.db.dropDatabase();
  })
  .then(() => {
    //console.log("Database dropped!");
    return Road.create(roads);
    // forwards the promise to the next `then`
  })
  .then((data) => {
    console.log(`Inserted ${data.length} roads`); // Inserted 10 books
    return mongoose.connection.close();
  })
  .then(() => {
    console.log("Database connection closed!");
  })
  .catch((err) => {
    console.log(err);
  });

//[({{road.waypoints[0][0]}}+{{road.waypoints[1][0]}})/2,({{road.waypoints[0][1]}}+{{road.waypoints[1][1]}})/2]
