const express = require('express');
const { error } = require('jquery');

const app = express();
app.get('/', function(req,res){
    res.send('Cool! it is running')
})






app.listen(8000, (error) =>{
    if(error){
        console.log("Error is running on the server" , error);
    }
    console.log("Yup! My exprees server is running");
})

