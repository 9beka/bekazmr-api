import axios from "axios";
import FakeShop from "../models/fakeProducts.js";

const delay = () => {
  return new Promise((resolve) => setTimeout(resolve, 1000));
};

export const fetchCocktails = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  for (let item of response.data) {
    await saveOrUpdateMongoDB(
      item.id,
      item.title,
      item.price,
      item.description,
      item.category,
      item.image,
    );
    await delay();
  }
};

const saveOrUpdateMongoDB = async (id, title, price, description, category, image) => {
  const existingProduct = await FakeShop.findOne({ id: id });

  if (existingProduct) {
    await FakeShop.updateOne({ id: id }, {
      title,
      price,
      description,
      category,
      image,
      $setOnInsert: { createdAt: Date.now() }
    }, { upsert: true });
  } else {
    const newProduct = new FakeShop({
      id,
      title,
      price,
      description,
      category,
      image,
      createdAt: Date.now()
    });
    await newProduct.save();
  }
};