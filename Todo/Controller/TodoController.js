const express = require("express");

const todomodel = require("../Model/todoModel");

const getTodoUser = async (req, res) => {
  try {
    const todos = await todomodel.find();
    res.status(200).json({
      message: "Get all Todos",
      data: todos,
    });
  } catch (error) {
    res.status(404).json({ message: "Couldn't get all todos", error });
  }
};

const createnewuser = async (req, res) => {
  try {
    const { title, day, date, complete } = req.body;
    const newuser = await todomodel.create({
      title,
      day,
      date,
      complete,
    });

    res.status(200).json({
      message: "create new todo",
      data: newuser,
    });
  } catch (error) {
    res.status(404).json({
      message: "couldn't create new todo",
    });
  }
};

module.exports = { getTodoUser, createnewuser };
