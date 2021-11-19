const express = require('express');
const cors = require("cors");
const users = require("./routes/users.js")

const app = express()

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/public", express.static(__dirname + "/public"));
app.use("/users", users)

app.listen(8080, function () {
  console.log("The server is now listening on 8080");
});
