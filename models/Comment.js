//require sequelize
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Comment model
class Comment extends Model {}

// define fields/columns id, userId, postId, comment
Comment.init(
    {  
        id: {},
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'comment'
    }
);

//modlue export
module.exports = Comment;