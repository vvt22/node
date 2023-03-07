const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get("/", (req, res) => {
  // res.send('<p>home page</p>');       //infers both setHeader and statuscode
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send('<p>about page</p>');
  res.sendFile("./views/about.html", { root: __dirname }); //sendfile will the abs path so
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
// use will regardless of url if it reaches the below(similar to default in switch)
app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
  // we have to set the 404 manually
});
