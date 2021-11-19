const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.listen(8080, function () {
  console.log("The server is now listening on 8080");
});
