const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
      res.redirect('/login-signup');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  