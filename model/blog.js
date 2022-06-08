const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    body: String,
    category: String,
    likes: Number,
    tags: [String],
    date: Date
});

const Blog = mongoose.model("posts", blogSchema);

module.exports = Blog;