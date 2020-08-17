// Importing required modules
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import models, { connectDb } from "./models";

// parse env variables
require("dotenv").config();

// Configuring port
const port = process.env.PORT || 9000;

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

connectDb().then(async () => {
  resetDb();
  seedFruitDb();

  app.listen(port);
  console.log(`Listening On http://localhost:${port}/api`);
});

const resetDb = async () => {
  await models.Fruit.deleteMany({});
};

const seedFruitDb = async () => {
  const banana = new models.Fruit({
    name: "Banana",
    weight: 3.2,
    image: "/banana.jpg",
  });
  const strawberry = new models.Fruit({
    name: "Strawberry",
    weight: 1.4,
    image: "/strawberries.jpg",
  });
  const gala = new models.Fruit({
    name: "Gala Apple",
    weight: 5.2,
    image: "/gala.jpg",
  });
  const pinkLady = new models.Fruit({
    name: "Pink Lady Apple",
    weight: 5.3,
    image: "/pink-lady.jpg",
  });

  await banana.save();
  await strawberry.save();
  await gala.save();
  await pinkLady.save();
};

module.exports = app;
