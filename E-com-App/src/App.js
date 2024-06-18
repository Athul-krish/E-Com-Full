import { Route, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ProductList from "./components/Productlist";
import ProductDetails from "./components/ProductDetails";
import ShoppingCart from "./components/ShoppingCart";
import UserDetails from "./components/UserDetails";
import AdminPanel from "./components/AdminPanel";
import NewProduct from "./components/NewProduct";
import PaymentForm from "./components/PaymentForm";
import PaymentSuccess from "./components/PaymentSuccess";
import EditUserDetails from "./components/EditUserDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/userDetails" element={<UserDetails />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/admin/newProduct" element={<NewProduct />} />
        <Route path="/editUser" element={<EditUserDetails />} />
        <Route
          path="/admin/products/update"
          element={<NewProduct updateProduct />}
        />
        <Route
          path="/admin/productDetails/:id"
          element={<ProductDetails adminProduct />}
        />
        <Route path="/checkout" element={<PaymentForm />} />
        <Route path="/paymentSuccessful" element={<PaymentSuccess />} />
      </Routes>
    </div>
  );
}

export default App;
