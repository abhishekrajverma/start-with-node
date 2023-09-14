const exprees = require('express');
const users = require('./MOCK_DATA.json');

const app = exprees();
const PORT = 8000;

app.get('/users', (req, res) =>{
    return res.json(users);
})
app.get('/api/users', (req, res) =>{
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.send(html);
})






app.listen(PORT, () => {
    console.log(`Express server started:${PORT}`);
})