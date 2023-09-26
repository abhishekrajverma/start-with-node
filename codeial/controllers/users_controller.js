module.exports.profile = (req,res) => {
    return res.end('<h1>hello from profile</h1>')

}
module.exports.name = (req,res) => {
    return res.end('<h1>hello from name</h1>');
}

// render the sign up page
module.exports.signUp = (req,res) => {
    return res.render('user_sign_up', {
        title : 'Codeial | Sign Up'
    });
}

// render the sign in page
module.exports.signIn = (req,res) => {
    return res.render('user_sign_in', {
        title : 'Codeial | Sign In'
    });
}

//get the sign up data
module.exports.create = (req, res) =>{

}

//sign in and create a session for user
module.exports.createSession = (req, res) =>{
    
}