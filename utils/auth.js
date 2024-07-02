// User authentication to provide security to access 
const withAuth = (req, res, next) => {
    // If the user is logged in, thus the session will redirect the request to the login route
    if (!req.session.user_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  // Export
  module.exports = withAuth;