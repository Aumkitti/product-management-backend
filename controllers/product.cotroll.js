// productController.js
const Product = require('../model/product.management');

const createProduct = async (req, res) => {
  try {
    const { name, details,type, image } = req.body;
    const newProduct = await Product.create({ name, details, type, image });
    res.json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error: error.message });
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, details, type, image } = req.body;
    const updatedProduct = await Product.update(
      { name, details, type, image },
      { where: { id } }
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error: error.message });
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.destroy({ where: { id } });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error: error.message });
  }
}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct
};
