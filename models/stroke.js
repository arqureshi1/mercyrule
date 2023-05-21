const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Stroke extends Model {};

Stroke.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    post: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    videourl: {
        type: DataTypes.STRING,
        allowNull: true
    },
    userID:{
        type: DataTypes.INTERGER,
        references: {
            model:"user",
            key:"id"

        }
    }
}, 
{
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'stroke'
}
);

module.exports = Stroke;