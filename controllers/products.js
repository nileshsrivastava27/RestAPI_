const productModel = require("../models/product");

const getAllProducts  = async(req, res) =>{
    const myData = await productModel.find({});
    res.status(200).json({myData});
}

const getAllProductsTesting  = async(req, res) =>{
    res.status(200).json({msg: "Getting all the products in testing"});
}

module.exports = {getAllProducts, getAllProductsTesting};