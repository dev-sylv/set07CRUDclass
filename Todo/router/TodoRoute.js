const express = require("express");
const { getTodoUser, createnewuser } = require("../Controller/TodoController");

const router = express.Router();

router.route("/getTodoUser").get(getTodoUser);
router.route("/createTo").post(createnewuser);

module.exports = router;
