const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  let location = fs.readFileSync("./data/mock.json");
  location = JSON.parse(location);
  console.log(location);
  return res.json(location);
});

module.exports = router;
