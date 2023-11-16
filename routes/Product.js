const express = require('express');
const Product = require('../model/product.management');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, details, type, image } = req.body;
    const newProduct = await Product.create({ name, details, type, image });
    res.json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
      const products = await Product.findById(req.params.id);
      res.json(products);
  } catch (error) {
      if (error.kind === "not_found!") {
          res.status(400).json("Product not found!")
      }else{
          res.status(500).json({error:"Failed to get Product data!"});
      }
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, details, type, image } = req.body;

  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: id },
      { name, details, type, image },
      { new: true } // This option returns the modified document
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;

    // Check if productId is a valid ObjectId
    if (!mongoose.isValidObjectId(productId)) {
      return res.status(400).json({ error: "Invalid ObjectId format" });
    }

    const result = await Product.findOneAndDelete({ _id: productId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(204).json({ message: "Product id " + productId + " is deleted", isDeleted: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete Product data" });
  }
});


module.exports = router;
