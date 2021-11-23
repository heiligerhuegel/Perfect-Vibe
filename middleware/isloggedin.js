// middleware/isLoggedIn.js

// Custom middleware that checks if the request has a valid cookie
function isloggedin(req, res, next) {
    if (!req.session.user) {
      return res.redirect("/login");
    }
    next();
  }
  
  module.exports = isloggedin;