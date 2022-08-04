//require sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//bcrypt for password hash
const bcrypt = require('bcrypt');

//create User model
class User extends Model {}
// define fields/columns id, username, password
User.init(
    {  
        id: {},
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'user'
    }
);
//password hash
//modlue export
module.exports = User;