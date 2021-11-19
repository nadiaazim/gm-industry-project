const express = require("express");
const router = express.Router();

router.get("/id", (req, res) => {
    const { id } = req.params;
    users = JSON.parse(fs.readFileSync(filePath, "utf8"));
    userData = users.find(user => user.id === id);
    res.status(200);
    res.send(userData)
})

module.exports = router;