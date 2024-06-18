const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  productTitle: String,
  productImageURL: String,
  productPrice: String,
});

const cartModel = mongoose.model("cart", cartSchema);

module.exports = cartModel;
