const User = require("./../models/User.model");
<<<<<<< HEAD
const isLoggedIn = require("../middleware/isLoggedIn");
const setAuthFlag = require("./../middleware/setAuthFlag")
=======
const isloggedin = require("./../middleware/isloggedin");
const setauthflag = require("./../middleware/setauthflag")
>>>>>>> eea8deda8c32355b80862b541db1ba6e48d7748d
const router = require("express").Router();
const axios = require('axios');


// create account on the same page as login


router.get("/:id", isloggedin, setauthflag, (req, res) => {
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




// router.post("/createroute", isloggedin, setauthflag, (req, res) => {

//     // User.findById(userId)
//     //     .then((user) => {
//     //         data = {
//     //             user: req.user,
//     //             userData: user
//     //         }
//     //         res.render('user/user-panel', data)        
//     // })
//     // .catch((err) => {
//     //     console.log(err)
//     // })

//   });
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
