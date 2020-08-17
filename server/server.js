import app from "./app";
import models, { connectDb } from "./models";

const port = process.env.PORT || 9000;

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
