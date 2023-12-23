import FakeShop from "../../models/fakeProducts.js";
export const  getFakeshop = async (req, res) => {
   try {
     const items = await FakeShop.find({}).sort("-createdAt");
     res.status(200).send(items);
   } catch (error) {
     res.status(500).send({ message: error.message });
   }
 } 