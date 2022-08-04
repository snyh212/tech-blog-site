//require sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Post model
class Post extends Model {}

// define fields/columns id, content, userId, title
User.init(
    {  
        id: {},
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'post'
    }
);

//modlue export
module.exports = Post;