const Comment = require('../models/comment');
const Post = require("../models/post");

module.exports.create = async (req, res) => {
    try {
        const post = await Post.findById(req.body.post);
        if (post) {
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user
            }).then((comment) => {
                post.comments.push(comment);
                post.save();
                return res.redirect('back');
            })
        }
    } catch (err) {
        if (err) {
            console.log(err);
        }
    }
}