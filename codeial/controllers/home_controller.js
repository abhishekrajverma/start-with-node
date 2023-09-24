module.exports.home = (req,res) =>{
    return res.send('<h1>hello from controller</h1>')
}

module.exports.profile = (req,res) => {
    return res.end('<h1>hello from profile</h1>')

}