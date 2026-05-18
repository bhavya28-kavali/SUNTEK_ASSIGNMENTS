import exp from "express";
import { ProductModel } from "../Models/ProductModel.js";

export const productApp = exp.Router();

// GET all products
productApp.get("/products", async (req, res) => {
  const productsList = await ProductModel.find();
  res.status(200).json({ message: "products", payload: productsList });
});

// CREATE product
productApp.post("/products", async (req, res) => {
  const newProduct = req.body;
  const newProductDoc = new ProductModel(newProduct);
  await newProductDoc.save();

  res.status(201).json({ message: "product created", payload: newProductDoc });
});

// GET product by id
productApp.get("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.findById(productId);

  res.status(200).json({ message: "product", payload: product });
});

// UPDATE product
productApp.put("/products/:id", async (req, res) => {
  const productId = req.params.id;
  const modifiedProduct = req.body;

  const latestProduct = await ProductModel.findByIdAndUpdate(
    productId,
    { $set: modifiedProduct },
    { new: true }
  );

  res.status(200).json({ message: "product modified", payload: latestProduct });
});
