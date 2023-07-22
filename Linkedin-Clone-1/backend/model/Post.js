const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema(
    {
    user_email: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
    },
    image_link: {
        type: String,
    },
    },
    { collection: 'posts'}
);

module.exports = mongoose.model('Post', postSchema);