const User = require("./../models/User.model");
const isLoggedIn = require("./../middleware/isLoggedIn");
const setAuthFlag = require("./../middleware/setAuthFlag")
const router = require("express").Router();

// create account on the same page as login


router.get("/:id", isLoggedIn, setAuthFlag, (req, res) => {
    const userId = req.params.id
    User.findById(userId)
        .then((user) => {
            data = {
                user: req.user,
                userData: user
            }
            res.render('user/user-panel', data)
        })
        .catch((err) => {
            console.log(err)
        })
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
