const express = require("express");
const userModel = require("../Model/UserModel");

// CRUD: CREATE, READ

//get all users
const getAllUsers = async (req, res) => {
  try {
    const getUsers = await userModel.find();
    res.status(200).json({
      message: `${getUsers.length} Users successfully gotten`,
      data: getUsers,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't get all users",
    });
  }
};

const newUser = async (req, res) => {
  try {
    const { name, email, password, isFemale, phoneNum } = req.body;

    const createUser = await userModel.create({
      name,
      email,
      password,
      isFemale,
      phoneNum,
    });
    res.status(201).json({
      message: "Created a new user",
      data: createUser,
    });
  } catch (error) {
    res.status(400).json({
      message: "couldn't create  user",
    });
  }
};

module.exports = { getAllUsers, newUser };
