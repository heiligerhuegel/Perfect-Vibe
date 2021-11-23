const router = require("express").Router();
const Road = require("./../models/road.model");
const token = process.env.MAPBOX_TOKEN;
<<<<<<< HEAD
const isLoggedIn = require("../middleware/isLoggedIn");
const setAuthFlag = require("./../middleware/setAuthFlag")
const fileUploader = require('./../config/cloudinary.config');
=======
const isloggedin = require("./../middleware/isloggedin");
const setauthflag = require("./../middleware/setauthflag")
const axios = require('axios');

>>>>>>> eea8deda8c32355b80862b541db1ba6e48d7748d



router.get("/roads", setauthflag, async (req, res) => {
  const roadsFromDB = await Road.find();
  data = {
    user: req.user,
    roadsFromDB: roadsFromDB 
  }
  res.render("roads", data );
});

router.get("/road/:id", setauthflag, (req, res) => {
  const id = req.params.id;

  Road.findById(id).then((road) => {
    data = {
      road: road,
      accessToken: token,
      user: req.user
    };

    res.render("road-id", data);
  });
});

router.get("/createroute", isloggedin, setauthflag, (req, res) => {
  res.render('create-route', {user: req.user} )
})

<<<<<<< HEAD
router.post("/createroute", isLoggedIn, setAuthFlag, fileUploader.single('roadImage'), (req, res) => {
=======
router.post("/createroute", isloggedin, setauthflag, (req, res) => {
>>>>>>> eea8deda8c32355b80862b541db1ba6e48d7748d
  console.log(req.body)
  let waypoint1 = []
  let waypoint2 = []
  let waypoints = []
  waypoint1.push(Number(req.body.start.split(",")[1]))
  waypoint1.push(Number(req.body.start.split(",")[0]))
  waypoint2.push(Number(req.body.end.split(",")[1]))
  waypoint2.push(Number(req.body.end.split(",")[0]))
  console.log(waypoint1)
  console.log(waypoint2)

  let userId = req.session.user._id
  let userName = req.session.user.username
  let name = req.body.name
  let description = req.body.description
  let length = Number(req.body.distance)
  let duration = Number(req.body.duration)
  waypoints.push(waypoint1, waypoint2)
  console.log(req.body.roadImage)
  console.log(req.file)
  Road.create({ userId, userName, name, description, length, duration, imageUrl: req.file.path})
  .then((createdRoot) => {
    console.log(createdRoot);
      return Road.findByIdAndUpdate(createdRoot._id, { $push: { waypoints: { $each: waypoints  } }})    
  })
  .then((road) => {
      res.redirect(`../road/${road._id}`)
  })
  .catch((err) => {
      console.log(err)    
  });
//   let image = []


  })

//api.mapbox.com/directions/v5/mapbox/driving/{{road.waypoints.0.0}},{{road.waypoints.0.1}};{{road.waypoints.1.0}},{{road.waypoints.1.1}}?geometries=geojson&access_token=MAPBOX_TOKEM

// lets create all the routes in be beginning by hand and add this panel if everything works
// router.get("/road/:id/edit", (req, res) => {
//   const id = req.params.id;
//   res.render("route/id/edit");
// });

module.exports = router;