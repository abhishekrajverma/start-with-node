const exprees = require("express");
const path = require("path");
const PORT = 8000;

const app = exprees();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middleware
app.use(exprees.urlencoded());
//middleware 1
app.use((req, res, next) => {
  console.log("hello from middleware 1");
  next();
});

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
    Contact: contactList,
  });
});

//post
app.post("/create-contact", (req, res) => {
  contactList.push({
    name: req.body.name,
    phone: req.body.phone,
  });
  //short way to write because body has contain name and phone also
  // contactList.push(req.body);
  return res.redirect("/contact");
});
//Routes
app.get("/home", (req, res) => {
  return res.render("home", {
    title: "My Home",
  });
});

app.listen(PORT, () => {
  console.log(`Express server started:${PORT}`);
});
