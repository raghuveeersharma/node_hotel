const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const personRouter = require("./routes/personRouter");
app.use("/person", personRouter);





const menuRouter = require("./routes/menuRouter");
app.use("/menu", menuRouter);




const port = 3000;

app.listen(port, () => {
  console.log("listening on port 3000");
});

app.get("/about", (req, res) => {    // this learning routes
  res.send("this is about page");
  console.log("about page");
});
app.get("/contact", (req, res) => {
  res.send("this is contact page");
  console.log("contact page");
});


