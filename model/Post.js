const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    body: String,
    category: String,
    likes: {
        type: Number,
        default: 0
    },
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("posts", postSchema);

module.exports = Post;