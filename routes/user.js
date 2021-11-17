const router = require("express").Router();

// create account on the same page as login
router.get("/user-login", (req, res) => {
  res.render("user-login");
});

// user panel as bonus to change data about the user
// router.get("/user/:id/panel", (req, res) => {
//   const id = req.params.id;
//   res.render("user-id-panel");
// });

// also bonus
// router.get("/admin/panel", (req, res) => {
//   res.render("admin/panel");
// });

module.exports = router;
