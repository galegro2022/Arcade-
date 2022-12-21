const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seed_db = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seed_db();
