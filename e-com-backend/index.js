const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const productRoute = require("./routes/product_route.js");
const cartRoute = require("./routes/cart_route.js");
const userRoute = require("./routes/user_route.js");
const app = express();


app.use(cors());    

app.use(morgan('dev'))

app.use("/api", cartRoute);
app.use("/adminPanel", productRoute);
app.use("/accounts", userRoute);

const PORT = process.env.PORT || 9000;

const db =
  "mongodb+srv://athulkrishnapanamakkal:passw0rd90000@cluster0.oll34kg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(db)
  .then(() => {
    console.log("DB Connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello...");
});

app.listen(PORT, () => console.log(`Listening On Port:${PORT}`));
