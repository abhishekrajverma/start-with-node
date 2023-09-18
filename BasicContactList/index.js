const express = require('express');
const path = require('path');



const app = express();


app.get('/', function(req,res){
    return res.sendFile(path.join(__dirname , "./html/index.html"));
});
app.get('/profile', function(req,res){

});

//const myServer = http.createServer(app);






app.listen(8000, (error) =>{
    if(error){
        console.log("Error is running on the server" , error);
    }
    console.log("Yup! My exprees server is running");
})

