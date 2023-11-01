const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        //comments belongs to the user
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        }
    },
    {
        timestamps: true,
    });

const Comment = mongoose.model('Comment' , commentSchema);

module.exports = Comment;
