//require models
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//create associations with foreign key associations
//user many posts
//user many comment
//post belong to user
//post many comment
//comment belong to user
//comment belong to post