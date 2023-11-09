const express = require('express');
const Product = require('../model/product.management');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
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

router.get("/api/product/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to retrieve product" });
  }
});


router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, details, type, image } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, details, type, image }, { new: true });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete("/product/:id", async (req, res)=>{
  try {
      const productId = req.params.id;
      const isDelete = await Product.removeById(productId);
      if (isDelete) {
      res.status(204).json({message: "Product id " + productId + "is deleted", isDeleted:isDelete});
      }
  } catch (error) {
      if (error.kind === "not_found") {
          res.status(404).json({error: "Product not found"});
      }else {
          res.status(500).json({error: "failed to Delete Product data"});
      }
  }
});

module.exports = router;
