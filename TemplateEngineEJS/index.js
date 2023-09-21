const exprees = require("express");
const path = require("path");
const PORT = 8000;

const db = require("./config/mongoose");
const Contact = require('./models/contact');

const app = exprees();


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//middleware
app.use(exprees.urlencoded());
//serving our static files such as CSS, Images, javascript
app.use(exprees.static('assets'));


//middleware 1
app.use((req, res, next) => {
  //manipulate the req
  req.myName = "Abhishek";
  console.log("hello from middleware 1");
  next();
});

//middleware 2
app.use((req, res, next) => {
  console.log("middleware 2 calling :", req.myName);
  console.log("hello from middleware 2");
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
  console.log(`get method calling : ${req.myName}`);
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
app.get('/delete-contact/' , (req,res) =>{
  let phone =req.query.phone;

  let contactIndex = contactList.findIndex((contact) => contact.phone == phone);

  if(contactIndex != -1){
    contactList.splice(contactIndex, 1);
  }

  return res.redirect('/contact');
})

app.listen(PORT, () => {
  console.log(`Express server started:${PORT}`);
});
