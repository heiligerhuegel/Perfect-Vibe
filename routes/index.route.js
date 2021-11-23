const router = require("express").Router();
const isLoggedIn = require("./middleware/isLoggedIn");
const setAuthFlag = require("./middleware/setAuthFlag")


/* GET home page */
router.get("/", setAuthFlag, (req, res, next) => {
  let data
  // Check if the incoming request has a valid cookie/session
  let userIsLoggedIn = false;
  // if (req.session.user) {
  //   userIsLoggedIn = true;
  //   data = {
  //     userIsLoggedIn: userIsLoggedIn,
  //     userId: req.session.user._id
  //   }
  // }else{
  //   data = {
  //     userIsLoggedIn: userIsLoggedIn,
  //   }
  // }


  res.render("index", {user: req.user} );
});

// GET /secret
// We use the isLoggedIn middleware to protect the route

router.get("/secret", isLoggedIn, (req, res, next) => {
  res.render("secret-view");
});

module.exports = router;
