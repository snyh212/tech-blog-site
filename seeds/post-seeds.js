const { Post } = require('../models');

const postData = [
    {
        title: "First Blog",
        contents: "A bunch of random stuff",
        user_id: 1
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;