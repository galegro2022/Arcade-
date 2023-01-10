const router = require('express').Router();
const { User, Games } = require('../models');
const withAuth = require('../utils/auth');


// the withAuth middleware will check if the user is logged in
router.get('/', withAuth, async (req, res) => {
  try {
    const gameData = await Games.findAll({
      
    });
    console.log(gameData)

    const games = gameData.map((game) => game.get({ plain: true }));
    console.log(games)
    res.render('homepage', {
      games,
      // if the user is logged in, req.session will contain the user's information
      logged_in: req.session.logged_in,
      user: req.body.username,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login-signup', async (req, res) => {
  // if the user is logged in, redirect to the homepage

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login-signup');
});

// if the user is logged in, redirect to the homepage

router.get('/homepage', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login-signup');
});

//     const userData = await User.findAll({
//       attributes: ["name", "email"],
//       where: {
//         name:name
//       }
//     })
//     console.log(userData)
//     const users = userData.map(user => user.get({plain: true}))
//   console.log(users)
//   res.render('login-signup', {
//     users
//   });
// });

module.exports = router;
