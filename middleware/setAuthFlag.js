// middleware/isLoggedIn.js

// Custom middleware that checks if the request has a valid cookie
function setAuthFlag(req, res, next) {
    if (!req.session.user) {
        req.user = {
            isLoggedin: false , 
          }
    }else[
        req.user = {
            isLoggedIn: true,
            userId: req.session.user._id
        }
    ]

  
    next();
  }
  
  module.exports = setAuthFlag;