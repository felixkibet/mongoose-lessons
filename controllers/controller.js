const Post = require("../model/Post");

module.exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        console.log({message: error});
    }
};

module.exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        console.log({message: error});
        return;
    }
};

module.exports.createPost = async(req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        category: req.body.category,
        tags: req.body.tags
    });

    try {
        await post.save();
        res.status(200).send({message: 'Success'});
    } catch (error) {
        console.log({message: error});
        return;
    }
};

module.exports.updatePost = async (req, res) => {
    try {
        const post = await Post.updateOne({_id: req.params.postId}, {$set: {}});
        res.status(200).send({message: 'Success'});
    } catch (error) {
        console.log({message: error});
        return;
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        const post = await Post.deleteOne({_id: req.params.postId});
        res.status(200).send({message: 'Success'});
    } catch (error) {
        console.log({message: error});
        return;
    }
};
