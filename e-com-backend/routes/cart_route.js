const express = require("express");
const router = express.Router();
const cart = require("../model/cart_schema");

router.use(express.json());

// Add Product To Cart
router.post("/addCart", async (req, res) => {
  const product = req.body;
  try {
    const data = await cart(product).save();
  } catch (err) {
    console.log(err);
    res.json({ message: "Unable To Add." });
  }
});

// Get Product From Cart
router.get("/view", async (req, res) => {
  try {
    const data = await cart.find();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
});

// Delete Product From Cart Using id
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await cart.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).json({ message: "Couldn't Find The Item!" });
    }
    return res.status(200).json({ message: "Deleted Successfuly..." });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
