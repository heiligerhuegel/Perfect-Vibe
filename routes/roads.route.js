const router = require("express").Router();
const Road = require("./../models/road.model");

router.get("/roads", (req, res) => {
  res.render("roads", { Road });
});

router.get("/road/:id", (req, res) => {
  const id = req.params.id;
  Road.findById(id).then((road) => {
    res.render("road-id", { road });
  });
});

// lets create all the routes in be beginning by hand and add this panel if everything works
// router.get("/road/:id/panel", (req, res) => {
//   const id = req.params.id;
//   res.render("route/id/panel");
// });

module.exports = router;
