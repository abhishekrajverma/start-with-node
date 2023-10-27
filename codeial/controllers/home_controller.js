const Post = require("../models/post");
module.exports.home = (req,res) =>{
    return res.render('home',{
        title: "HomePage",
        layout: "home"
    });
}

module.exports.home1= async (req, res) => {
    const result = await Post.find({}).populate('user').exec();
    return res.render('home1',{
        posts : result,
        title : "codeial | posts",
        layout : "home1"
    })
}