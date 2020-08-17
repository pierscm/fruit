// Importing required modules
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

// parse env variables
require("dotenv").config();

const app = express();

// Configure middlewares
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "html");

// Static folder
app.use(express.static(__dirname + "/views/"));

// Defining route middleware
app.use("/api", require("./routes/api"));
app.get("*", function (req, res, next) {
  return res.status(403).json({ message: "Forbidden" });
});

module.exports = app;
