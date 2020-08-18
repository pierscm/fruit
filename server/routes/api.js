const express = require("express");
import models from "../models";
import { query } from "express";

const router = express.Router();

router.get("/fruits", async (req, res) => {
  if (req.query.fruit) {
    const fruit = await models.Fruit.find({
      name: { $regex: req.query.fruit, $options: "i" },
    });
    if (fruit.length >= 1) {
      res.json(fruit);
    } else {
      res.status(404).json({ message: "Fruit not found" });
    }
  } else {
    return res.status(400).json({ message: "Bad Request" });
  }
});

module.exports = router;
