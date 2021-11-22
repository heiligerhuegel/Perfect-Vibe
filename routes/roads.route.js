const router = require("express").Router();
const Road = require("./../models/road.model");
const token = process.env.MAPBOX_TOKEN;
const isLoggedIn = require("./../middleware/isLoggedIn");
const setAuthFlag = require("./../middleware/setAuthFlag")
const axios = require('axios');




router.get("/roads", async (req, res) => {
  const roadsFromDB = await Road.find();
  res.render("roads", { roadsFromDB });
});

router.get("/road/:id", (req, res) => {
  const id = req.params.id;

  Road.findById(id).then((road) => {
    data = {
      road: road,
      accessToken: token,
    };

    res.render("road-id", data);
  });
});

router.get("/createroute", isLoggedIn, setAuthFlag, (req, res) => {
  axios.get('https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiaGVpbGlnZXJodWVnZWwiLCJhIjoiY2t2d2dmNXJyMDd3MzJ1cWkwajBtdW5vaSJ9.tMlXeOyESPxI3ZBVdxlYoA')
  .then(response => {
      console.log(response.data);
  })
  .catch(error => {
      console.log(error);
  });
  res.render('create-route')
})

//api.mapbox.com/directions/v5/mapbox/driving/{{road.waypoints.0.0}},{{road.waypoints.0.1}};{{road.waypoints.1.0}},{{road.waypoints.1.1}}?geometries=geojson&access_token=MAPBOX_TOKEM

// lets create all the routes in be beginning by hand and add this panel if everything works
// router.get("/road/:id/edit", (req, res) => {
//   const id = req.params.id;
//   res.render("route/id/edit");
// });

module.exports = router;
