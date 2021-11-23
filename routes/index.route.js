const router = require("express").Router();
const isloggedin = require("./../middleware/isloggedin");
const setauthflag = require("./../middleware/setauthflag")


/* GET home page */
router.get("/", setauthflag, (req, res, next) => {
  let data
  // Check if the incoming request has a valid cookie/session
  let userisloggedin = false;
  // if (req.session.user) {
  //   userisloggedin = true;
  //   data = {
  //     userisloggedin: userisloggedin,
  //     userId: req.session.user._id
  //   }
  // }else{
  //   data = {
  //     userisloggedin: userisloggedin,
  //   }
  // }


  res.render("index", {user: req.user} );
});

// GET /secret
// We use the isloggedin middleware to protect the route

router.get("/secret", isloggedin, (req, res, next) => {
  res.render("secret-view");
});

module.exports = router;
