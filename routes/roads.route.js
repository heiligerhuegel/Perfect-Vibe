const router = require("express").Router();
const Road = require("./../models/road.model");
const token = process.env.MAPBOX_TOKEN;

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

//api.mapbox.com/directions/v5/mapbox/driving/{{road.waypoints.0.0}},{{road.waypoints.0.1}};{{road.waypoints.1.0}},{{road.waypoints.1.1}}?geometries=geojson&access_token=MAPBOX_TOKEM

// lets create all the routes in be beginning by hand and add this panel if everything works
// router.get("/road/:id/edit", (req, res) => {
//   const id = req.params.id;
//   res.render("route/id/edit");
// });

https: module.exports = router;
