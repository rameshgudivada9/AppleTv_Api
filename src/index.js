const express = require("express");
const app = express();

app.use(express.json());
require("dotenv").config();
const PORT=process.env.PORT || 6265
const userController = require("./controllers/user.controllers");

app.use("/users",userController);






module.exports = app;