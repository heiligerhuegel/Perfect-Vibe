const router = require("express").Router();
const Road = require("./../models/road.model");
const User = require("./../models/User.model");
const token = process.env.MAPBOX_TOKEN;
const isloggedin = require("../middleware/isloggedin");
const setauthflag = require("./../middleware/setauthflag")
const fileUploader = require('./../config/cloudinary.config');



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

router.post("/createroute", isloggedin, setauthflag, fileUploader.single('roadImage'), (req, res) => {
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

  //console.log(req.body.roadImage)
  //console.log(req.file)

  Road.create({ userId, userName, name, description, length, duration, imageUrl: req.file.path})
  .then((createdRoot) => {
    console.log(createdRoot);
      //User.findByIdAndUpdate(req.session.user._id, {$push: {routes: {createdRoot._id}}})
      return Road.findByIdAndUpdate(createdRoot._id, { $push: { waypoints: { $each: waypoints  } }})    
  })
  .then((road) => {
      res.redirect(`../road/${road._id}`)
  })
  .catch((err) => {
      console.log(err)    
  });
  
  // add route to user array of routes

  })

//api.mapbox.com/directions/v5/mapbox/driving/{{road.waypoints.0.0}},{{road.waypoints.0.1}};{{road.waypoints.1.0}},{{road.waypoints.1.1}}?geometries=geojson&access_token=MAPBOX_TOKEM

// lets create all the routes in be beginning by hand and add this panel if everything works
// router.get("/road/:id/edit", (req, res) => {
//   const id = req.params.id;
//   res.render("route/id/edit");
// });

module.exports = router;