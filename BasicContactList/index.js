const express = require('express');
const { error } = require('jquery');
const http = require('http');

const app = express();
app.get('/', function(req,res){
    res.send('<h1>Cool! it is running</h1>')
});
app.get('/profile', function(req,res){
    res.send('<h1>Welcome To My Profile</h1>')
});

//const myServer = http.createServer(app);






app.listen(8000, (error) =>{
    if(error){
        console.log("Error is running on the server" , error);
    }
    console.log("Yup! My exprees server is running");
})

