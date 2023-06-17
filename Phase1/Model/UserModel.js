const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phoneNum: {
      type: Number,
    },
    isFemale: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("Students", userSchema);

module.exports = userModel;
