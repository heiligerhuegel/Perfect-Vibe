const router = require("express").Router();

router.get("/signup", (req, res) => {
  res.render("auth/user-signup");
});

router.get("/login", (req, res) => {
  res.render("auth/user-login");
});

module.exports = router;
