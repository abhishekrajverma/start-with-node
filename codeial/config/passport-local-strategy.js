const passport = require('passport');

const LocalStrategy = require('passport-local');

const User = require('../models/user');

// authentication using passport
passport.use(new LocalStrategy({
    usernameField: "email"
},
    function (email, password, done) {
        //find a user and establish the identity
        User.findOne({email : email})
        .then((user) =>{
            if(!user || user.password != password){
                console.log('Invaild username/password');
                return done(null, false);
            }

            return done(null, user);

        }).catch((err) => console.log(err));


    }
));