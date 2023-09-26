const express = require('express');

//require cookie-parse
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
//const expressLayouts = require('express-ejs-layouts');

//database setup
// const db = require('./config/mongoose');

//model setup
// const User = require("./models/user");


//middleware
// assets setup such as - css, images, and javascript
app.use(express.static('./assets'));
// 
app.use(express.urlencoded());

//calling our cookie parse
app.use(cookieParser())


// app.use(expressLayouts);
//extract style and scripts from sub pages into the layout
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);


//use express router
app.use('/', require('./routes'));


//set our ejs view engine
app.set("view engine", "ejs");
app.set("views", './views');


app.listen(port, (err) =>{
    if(err){
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on port : ${port}`);
})
