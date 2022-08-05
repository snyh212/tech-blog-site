const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment_text: "A",
        user_id: 1,
        post_id: 5,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;