const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}


Game.init( {
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        created_by: DataTypes.STRING,
        release_date: DataTypes.DATE,
        rating: DataTypes.STRING,
        description: DataTypes.TEXT,
        image: DataTypes.STRING
    });

Game.associate = function(models) {
    Game.belongsTo(models.User, {
        foreignKey: 'user_id'
    });
};

module.exports = Game;