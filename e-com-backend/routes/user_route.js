const express = require("express");
const router = express.Router();
const user = require("../model/user_schema");

router.use(express.json());

// Add User To Database
router.post("/newUser", async (req, res) => {
  const newUser = req.body;
  try {
    const data = await user(newUser).save();
  } catch (err) {
    console.log(err);
    res.json({ message: "Unable To Add User." });
  }
});

// Get Users From Database.
router.get("/viewUsers", async (req, res) => {
  try {
    const userEmail = req.query.userEmail;
    const data = await user.find({ userEmail: userEmail });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
});

// Update User Details in Database.
router.put("/update/userDetails/:id", async (req, res) => {
  const { id } = req.params;
  user
    .findByIdAndUpdate(id, req.body)
    .then((item) => res.json({ message: "User Details Updated." }))
    .catch((err) => res.status(400).json({ error: "Unable To Update." }));
});

module.exports = router;
