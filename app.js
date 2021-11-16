const express = require("express");
const hbs = require("hbs");
const mongoose = require("mongoose");
const DB_ROUTES = "routes";

const app = express();

// SETUP VIEW ENGINE
app.set("view engine", "hbs");
// SETUP THE FOLDER WITH TEMPLATES
app.set("views", __dirname + "/views");

// SET UP THE FOLDER FOR HBS PARTIALS
hbs.registerPartials(__dirname + "/views/partials");

// MIDDLEWARE
app.use(express.static("public"));

// Routes
// GET /
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/routes", (req, res) => {
  res.render("routes");
});

app.get("/route-:id", (req, res) => {
  const id = req.params.id;
  //const mapboxdata = from database
  res.render("route-id" /*{mapboxdata}*/);
});

// lets create all the routes in be beginning by hand and add this panel if everything works
// app.get("/route-:id-panel", (req, res) => {
//   const id = req.params.id;
//   res.render("route-id-panel");
// });

// create account on the same page as login
app.get("/user-login", (req, res) => {
  res.render("user-login");
});

// user panel as bonus to change data about the user
// app.get("/user-:id-panel", (req, res) => {
//   const id = req.params.id;
//   res.render("user-id-panel");
// });

// can be the same as the use login panel
// app.get("/admin-login", (req, res) => {
//   res.render("admin-login");
// });

// also bonus
// app.get("/admin-panel", (req, res) => {
//   res.render("admin-panel");
// });

// Start the server
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
