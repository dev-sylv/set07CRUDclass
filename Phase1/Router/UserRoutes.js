const express = require("express");

const router = express.Router();

const { getAllUsers, newUser } = require("../Controller/UserContoller");

// Get all users routes:
router.route("/getallusers").get(getAllUsers);

// Create new users routes:
router.route("/createnewusers").post(newUser);

module.exports = router;
