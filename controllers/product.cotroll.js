/*const { restart } = require("nodemon");
const Product = require('../model/product.management');
const Restaurant = require("../model/product.management");

Product.createProduct = async(newProduct) =>{
    try{
        const createProduct = await Product.create(newProduct)
        console.log("Created new product");
        return createProduct.toJSON();
    } catch (error) {
        console.log("Cannot Create New Product error", error);
        throw error
    }
};

Product.getAll = async () => {
    try {
        const product = await Product.findAll();
        return product.map(product => product.toJSON());  
    } catch (error) {
        console.error("error", error);
        throw error;
    }
};

Product.getById = async (productId) => {
    try{
        const product = await Product.findByPk(productId);
        if (product) {
            return Product.toJSON();
        } else {
            throw {kind: "not_found"};
        }
    } catch (error) {
        console.error("error", error);
        throw error;
    }
};

Product.updateById = async (id, productData) => {
    try {
        const [rowUpdated] = await Product.update(productData, {
            where: { id },
        });
        if (rowUpdated === 0){
            throw {kind: "not_found" };
        }
        return {id:id, ...productData};
    }catch (error) {
        console.log("error:", error);
        throw error;
    }
};

Product.removeById = async (id) =>{
    try {
        const rowDeleted = await Product.destroy({where: { id } });
        if(rowDeleted === 0){
            throw { kind: "not_found" };
        }
        return true
    } catch (error){
        console.log("error:", error);
        throw error;
    }
};

module.exports = Product;*/
const Product = require('../model/product.management');

Product.createProduct = async(newProduct) =>{
    try{
        const createProduct = await Product.create(newProduct)
        console.log("Created new product");
        return createProduct.toJSON();
    } catch (error) {
        console.log("Cannot Create New Product error", error);
        throw error
    }
};

module.exports = Product

