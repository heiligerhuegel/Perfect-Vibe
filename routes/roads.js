const router = require("express").Router();

router.get("/roads", (req, res) => {
  res.render("roads");
});

router.get("/road/:id", (req, res) => {
  const id = req.params.id;
  //const roaddata = from database
  res.render("road-id" /*{roaddata}*/);
});

// lets create all the routes in be beginning by hand and add this panel if everything works
// router.get("/route/:id/panel", (req, res) => {
//   const id = req.params.id;
//   res.render("route/id/panel");
// });

module.exports = router;
