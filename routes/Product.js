/*const express = require('express')
const router = express.Router()
const Product = require('../controllers/product.cotroll');

router.post('/product.sql',async(req,res)=>{
    try {
        const newProduct = req.body
        const createProduct = await Product.createProduct(newProduct)
        res.status(202).json(createProduct)
    } catch (error){
        res.status(500).json({error:"Failed to create Product"});
    }
})

module.exports = router;*/
const express = require('express');
const router = express.Router();

module.exports = router;
