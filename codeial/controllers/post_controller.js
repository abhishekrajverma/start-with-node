const Post = require("../models/post");

module.exports.create = async (req,res) =>{
    try{
        const user = await Post.create({
            content : req.body.content,
            user : req.user._id
        });
        return res.redirect('back')

    }catch(err){
        if(err){
            console.log(err);
        }
    }
}