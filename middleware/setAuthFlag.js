// middleware/isLoggedIn.js
const isloggedin = require("./../middleware/isloggedin");
// Custom middleware that checks if the request has a valid cookie
function setauthflag(req, res, next) {
    if (!req.session.user) {
        req.user = {
            isloggedin: false , 
          }
    }else[
        req.user = {
            isloggedin: true,
            userId: req.session.user._id
        }
    ]

  
    next();
  }
  
  module.exports = setauthflag;