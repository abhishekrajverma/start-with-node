const exprees = require('express');
const path = require('path');
const PORT = 8000;


const app = exprees();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


app.get('/users', (req, res) =>{
    return res.render('users', {
        title : "Users"
    });
    
});

//Routes
app.get('/home', (req, res) =>{
    return res.render('home', {title: "My Home"});
});

//2nd task
app.get('/api/users/:id', (req,res) =>{
    
});






app.listen(PORT, () => {
    console.log(`Express server started:${PORT}`);
})