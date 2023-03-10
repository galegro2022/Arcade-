const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Game extends Model {}


Game.init( {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
        title:{
            type: DataTypes.STRING,
            allowNull:false
         },
        genre:{ type:DataTypes.STRING,
                allowNull:false
        },
        created_by:{ type:DataTypes.STRING,
                     allowNull:false
        },
        release_date:{ type:DataTypes.DATE,
                        allowNull:false
        },
        rating:{ type:DataTypes.STRING,
                   allowNull:true
        },
        description:{ type:DataTypes.TEXT,
                      allowNull:true
        },
        image:{ type:DataTypes.STRING,
                      allowNull:false
        },
    },
    { 
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',

    });




module.exports = Game;