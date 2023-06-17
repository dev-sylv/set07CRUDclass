const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  title: {
    type: String,
  },
  day: {
    type: String,
  },
  date: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});

const todoModel = mongoose.model("todo", TodoSchema);

module.exports = todoModel;
