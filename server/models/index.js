import mongoose from "mongoose";
import Fruit from "./fruitModel";

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/fruit");
};

const models = { Fruit };
export { connectDb };
export default models;
