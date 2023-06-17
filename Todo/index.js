const express = require("express");
require("./Config/database");
const todoRouter = require("./router/TodoRoute");

const port = 3000;

const app = express();

app.use(express.json());

app.use("/api", todoRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is up and Running!!!",
  });
}); // default get

app.listen(port, () => {
  console.log("");
  console.log("Server Running on port", port);
});
