const exprees = require('express');
const users = require('./MOCK_DATA.json');

const app = exprees();
const PORT = 8000;

app.get('/users', (req, res) =>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})

//Routes
app.get('/api/users', (req, res) =>{
    return res.json(users);
});

//2nd task
app.get('/api/users/:id', (req,res) =>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id)
    return res.json(user);
});






app.listen(PORT, () => {
    console.log(`Express server started:${PORT}`);
})