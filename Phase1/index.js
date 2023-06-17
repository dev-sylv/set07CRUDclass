const express = require("express");
require("./Config/database");
const userrouter = require("./Router/UserRoutes");

const port = 2009;

const app = express();
app.use(express.json());

//default get
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server is up and running",
  });
});

app.use("/api", userrouter);

app.listen(port, () => {
  console.log(`server is up and running`, port);
});
