const sequelize = require('../config/connection');
const User = require('../models/user');

const userData = require('./userData.json');

const seedDatabase = async () => {
  // force: true drops the db before reseeding. when "npm run seed", all data will be replaces with whatever is in the seed files
  // PREVIOUSLY: await sequelize.sync({ force: false });
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Seeded Existing User Data~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

  process.exit(0);
};

seedDatabase();