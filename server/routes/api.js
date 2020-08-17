const express = require("express");
import models from "../models";

const router = express.Router();

router.get("/fruits", async (req, res) => {
  const fruit = await models.Fruit.find({});
  res.json(fruit);
});

router.get("/fruits/:fruitName", async (req, res) => {
  const fruit = await models.Fruit.find({
    name: { $regex: req.params.fruitName, $options: "i" },
  });
  if (fruit.length >= 1) {
    res.json(fruit);
  } else {
    res.status(404).json({ message: "Fruit not found" });
  }
});

module.exports = router;
