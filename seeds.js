const mongoose = require("mongoose");
const Product = require("./models/product");
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
  .then(() => {
    console.log(" mongoose Connection Open");
  })
  .catch((err) => {
    console.log(" Mongoose ERROR");
    console.log(err);
  });

// const p1 = new Product({
//   name: "Mango",
//   price: 20,
//   category: "fruit",
// });
// p1.save()
//   .then((p1) => {
//     console.log(p1);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
const seedProducts = [
  {
    name: "Fairy Eggplant",
    price: 1.0,
    category: "vegetable",
  },
  {
    name: "Organic Goddess Melon",
    price: 4.99,
    category: "fruit",
  },

  {
    name: "Organic Mini Seedless Watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Organic Celery",
    price: 1.5,
    category: "vegetable",
  },
];
Product.insertMany(seedProducts)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e);
  });
