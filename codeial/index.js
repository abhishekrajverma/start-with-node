const express = require('express');
//require cookie-parse
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

//database setup
const db = require('./config/mongoose');

//used for session cookie
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');

// 
app.use(express.urlencoded());

//calling our cookie parse
app.use(cookieParser());

//middleware
// assets setup such as - css, images, and javascript
app.use(express.static('./assets'));

//const expressLayouts = require('express-ejs-layouts');

//set our ejs view engine
app.set("view engine", "ejs");
app.set("views", './views');

//setup our session
app.use(session({
    name : 'codeial',
    secret : 'blah',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//use express router
app.use('/', require('./routes'));


// app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);






app.listen(port, (err) =>{
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})
