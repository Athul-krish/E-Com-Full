const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productTitle: String,
    productImageURL: String,
    productPrice: String,
    productDescription: String
})

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;