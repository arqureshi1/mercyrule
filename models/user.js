const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class User extends Model {

}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    password: {
        type:DataTypes.STRING,
        allowNull: False,
        validate: {
            len: [8]
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
},{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    unserscored: true,
    modelName: 'stroke',
});

module.exports = User;