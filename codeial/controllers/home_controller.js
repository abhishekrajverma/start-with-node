module.exports.home = (req,res) =>{
    return res.render('home',{
        title: "HomePage",
        layout: "home"
    });
}
module.exports.home1 = (req,res) =>{
    return res.render('home1',{
        title: "HomePage"
    });
}