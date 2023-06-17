const mongoose = require("mongoose");

const todoDB = "mongodb://0.0.0.0:27017/toDoDatabase";

const toDo = async () => {
  try {
    const todbconnect = await mongoose.connect(todoDB);
    console.log(`connecte:${todbconnect.connection.host}`);
    console.log("");
  } catch (error) {
    console.log("error");
  }
};

module.exports = toDo();
