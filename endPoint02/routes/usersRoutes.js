const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/usersController");

// register users
router.post("/register", (req, res) => {
    usersControllers.usersRegister(req.body).then((result) => res.send(result));
})

// login users
router.post("/login", (req, res) => {
    usersControllers.loginUsers(req.body).then((result) => res.send(result));
})

module.exports = router;