const exprees = require("express");
const path = require("path");
const PORT = 8000;

const app = exprees();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var contactList = [
  {
    name: "Abhishek Raj",
    phone: 9262648753,
  },
  {
    name: "Abhishek Kumar",
    phone: 9931987012,
  },
  {
    name: "Aman Raj",
    phone: 6203042004,
  },
  {
    name: "Amit Kumar",
    phone: 9113186608,
  },
];

app.get("/users", (req, res) => {
  return res.render("users", {
    title: "Users",
  });
});

app.get("/contact", (req, res) => {
  return res.render("contact", {
    title: "My Contact List",
    Contact: contactList
  });
});

app.post('/create-contact', (req, res)=>{
  return res.redirect('/home')

})
//Routes
app.get("/home", (req, res) => {
  return res.render("home", { title: "My Home" });
});

//2nd task
app.get("/api/users/:id", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Express server started:${PORT}`);
});
