const express = require("express");
const app = express();
const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/index.html"));
  //__dirname : It will resolve to your project folder.
});

app.get("/about.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/about.html"));
});

app.get("/contact-me.html", function (req, res) {
  res.sendFile(path.join(__dirname + "/html/contact-me.html"));
});

app.use((req, res) => {
  res.sendFile(path.join(__dirname + "/html/404.html"));
});

// app.get gets the url but app.use is a general func
// app.use is used here to redirect any link that isn't in app.get to 404.html

app.listen(3000);

console.log("Running at Port 3000");
