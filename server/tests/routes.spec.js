import request from "supertest";
import app from "../app";
import mongoose from "mongoose";
import Fruit from "../models/fruitModel";

describe("/fruits", () => {
  beforeAll(async () => {
    await mongoose.connect(
      global.__MONGO_URI__,
      { useNewUrlParser: true, useCreateIndex: true },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );

    const banana = new Fruit({
      name: "Banana",
      weight: 3.2,
      image: "/banana.jpg",
    });
    const strawberry = new Fruit({
      name: "Strawberry",
      weight: 1.4,
      image: "/strawberries.jpg",
    });
    const kiwi = new Fruit({
      name: "kiwi",
      weight: 3.2,
      image: "/kiwi.jpg",
    });
    const apple1 = new Fruit({
      name: "red apple",
      weight: 3.2,
      image: "/red.jpg",
    });
    const apple2 = new Fruit({
      name: "green apple",
      weight: 3.2,
      image: "/green.jpg",
    });
    apple1.save();
    apple2.save();
    kiwi.save();
    banana.save();
    strawberry.save();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it("should return a fruit when the name is provided", async () => {
    const res = await request(app).get("/api/fruits?fruit=kiwi");
    expect(res.statusCode).toBe(200);
    expect(res.body[0].name).toBe("kiwi");
  });

  it("should return multiple fruits when the name has a partial match", async () => {
    const res = await request(app).get("/api/fruits?fruit=apple");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(2);
  });

  it("should return a 404 when a fruit is not found", async () => {
    const res = await request(app).get("/api/fruits?fruit=corn");
    expect(res.statusCode).toBe(404);
  });

  it("handles bad requests", async() => {
    const res = await request(app).get("/api/fruits?vegetable=pineapple");
    expect(res.statusCode).toBe(400);
  });
});
