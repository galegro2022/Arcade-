const User = require('./user.js');
const Games = require('./games.js')

module.exports = { User,Games };


// Game.associate = function(models) {
//     Game.belongsTo(models.User, {
//         foreignKey: 'user_id'
//     });
// };