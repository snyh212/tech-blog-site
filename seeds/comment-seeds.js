const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        comment_text: "Comments words",
        user_id: 1,
        post_id: 1,
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;