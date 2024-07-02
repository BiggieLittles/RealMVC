const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Amazing Job",
        user_id: 2,
        post_id: 3,
        
    },
    {
        comment_text: "Love this perspective",
        user_id: 2,
        post_id: 5,
        
    },
    {
        comment_text: "Would love to learn more",
        user_id: 4,
        post_id: 1,
        
    },
    {
        comment_text: "Awesome",
        user_id: 3,
        post_id: 5,
        
    },
    {
        comment_text: "Wonderful",
        user_id: 3,
        post_id: 4,
        
    },
    {
        comment_text: "I love to learn more",
        user_id: 2,
        post_id: 1,
        
    },
    {
        comment_text: "I will read more about this,thank you",
        user_id: 5,
        post_id: 3,
        
    },
    {
        comment_text: "It was an interesting topic",
        user_id: 2,
        post_id: 1,
        
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;