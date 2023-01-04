const router = require('express').Router();
const { User, Games } = require('../models');
const withAuth = require('../utils/auth');

// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/',  async (req, res) => {
  try {
    const gameData = await Games.findAll({
      
    });
    console.log(gameData)

    const games = gameData.map((game) => game.get({ plain: true }));
    console.log(games)
    res.render('homepage', {
      games,
      // TODO: Add a comment describing the functionality of this property
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  // TODO: Add a comment describing the functionality of this if statement
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }
    const userData = await User.findAll({
      attributes: ["name", "email"],
      where: {
        name:name
      }
    })
    console.log(userData)
    const users = userData.map(user => user.get({plain: true}))
  console.log(users)
  res.render('login-signup', {
    users
  });
});

module.exports = router;
