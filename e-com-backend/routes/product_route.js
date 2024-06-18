const express = require("express");
const router = express.Router();
const product = require("../model/product_schema");

router.use(express.json());

// Add Products To Database.
router.post("/addProduct", async (req, res) => {
  const ItemProduct = req.body;
  try {
    const data = await product(ItemProduct).save();
  } catch (error) {
    console.log(error);
    res.json({ message: "Unable To Add Product!" });
  }
});

// Fetch Products From Database.
router.get("/view/products", async (req, res) => {
  try {
    const data = await product.find();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

// Update Product Details in Database.
router.put("/update/product/:id", async (req, res) => {
  const { id } = req.params;
  product
    .findByIdAndUpdate(id, req.body)
    .then((item) => res.json({ message: "Product Updated Successfuly." }))
    .catch((err) => res.status(400).json({ error: "Unable to Update." }));
});

// Delete Product From Database.
router.delete("/delete/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await product.findByIdAndDelete(id);
    if (!result) {
      return res
        .status(400)
        .json({ message: "Couldn't Find The Given Product." });
    }
    return res.status(200).json({ message: "Deleted Successfuly." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
