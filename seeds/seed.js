const sequelize = require('../config/connection');
const User = require('../models/user');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
  .then(() => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Seeded Existing User Data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  });
  process.exit(0);
};

seedDatabase();