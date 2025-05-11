const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");


router.post("/register", userController.registerUser);


router.get("/", userController.getAllUsers);


router.get("/:id", userController.getUserById);


router.delete("/:id", userController.deleteUser);

module.exports = router;
