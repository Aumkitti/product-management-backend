const express = require('express');
const Product = require('../model/product.management');
const router = express.Router();

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
    const [updatedCount, updatedProducts] = await Product.update(
      { name, details, type, image },
      { where: { id }, returning: true }
    );

    if (updatedCount === 0) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProducts[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedCount = await Product.destroy({ where: { id: productId } });

    if (deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(204).json({ message: "Product id " + productId + " is deleted", isDeleted: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete Product data" });
  }
});

module.exports = router;
