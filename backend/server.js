const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 8888;
const app = express();

connectDB();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/", require("./routes/post.routes"));

app.listen(port, () => console.log("URL http://localhost:" + port));