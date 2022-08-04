//require models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create associations with foreign key associations
//user many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//user many comment
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

//post belong to user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

//post many comment
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

//comment belong to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

//comment belong to post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};