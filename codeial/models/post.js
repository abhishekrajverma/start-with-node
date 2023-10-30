const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
    content :{
        type : String,
        required : true
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    //include the array of ids of all comments inn this post schema itself
    comments :[
        {
            type :{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Comment'
            }
        }
    ]
},{
    timestamps: true
});

const Post = mongoose.model('Post' , postSchema);

module.exports = Post;
