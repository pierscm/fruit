import mongoose from "mongoose";

const fruitSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Fruit = mongoose.model("Fruit", fruitSchema);
export default Fruit;
