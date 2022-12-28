const User = require('./User');
const Games = require('./games')
module.exports = { User,Games };


// Game.associate = function(models) {
//     Game.belongsTo(models.User, {
//         foreignKey: 'user_id'
//     });
// };