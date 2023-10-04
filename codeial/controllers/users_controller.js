const User = require("../models/user");

module.exports.profile = (req, res) => {
    return res.render('user_profile', {
        title: "User | Profile",
    })
}
module.exports.feedback = (req, res) => {
    return res.render('feedback')
}
module.exports.name = (req, res) => {
    return res.end('<h1>hello from name</h1>');
}

// render the sign up page
module.exports.signUp = (req, res) => {
    return res.render('user_sign_up', {
        title: 'Codeial | Sign Up'
    });
}

// render the sign in page
module.exports.signIn = (req, res) => {
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in', {
        title: 'Codeial | Sign In'
    });
}

//get the sign up data
module.exports.create = async (req, res) => {
    try {
        if (req.body.password != req.body.confirm_password) {
            return res.redirect('back');
        }
        const user = await User.findOne({ email: req.body.email })
        if (!user) {
            User.create(req.body);
            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('back');
        }
    } catch (err) { console.log(`error in finding user in signing up : ${err}`); return }
}

//sign in and create a session for user
module.exports.createSession = (req, res) => {
    return res.redirect('/');
}

module.exports.destroySession = function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        return res.redirect('/home1');
    });
}