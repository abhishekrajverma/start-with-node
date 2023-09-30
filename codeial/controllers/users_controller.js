const User = require("../models/user");

module.exports.profile = async (req, res) => {
    try {
        //  if the user can't be sign-in they can't access the profile routes
        if (req.cookies.user_id) {
            const user = await User.findById(req.cookies.user_id)
            if (user) {
                return res.render('user_profile', {
                    title: "User Profile",
                    user: user
                });
            }
            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('/users/sign-in')
        }
    } catch (err) {
        console.log(`Error : ${err}`);
    }
}

module.exports.logout = (req, res) => {
    return res.redirect('/users/sign-in');
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
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            User.create(req.body);
            return res.redirect('/users/sign-in');
        } else {
            return res.redirect('back');
        }
    } catch (err) {
        console.log(`Error : ${err}`);
    }
}

//sign in and create a session for user
module.exports.createSession = async (req, res) => {
    //setps to authenticate
    //find the user
    const user = await User.findOne({ email: req.body.email })
    try {
        //handle if user is found in database
        if (user) {
            //handle password  which doesn't match
            if (user.password != req.body.password) {
                return res.redirect('back');
            }
            //handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/users/profile');

        } else {
            //handle if user is not found in database
            return res.redirect('back');
        }
    } catch (err) {
        console.log(`Error : ${err}`);
    }

}