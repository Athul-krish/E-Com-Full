import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import CartItem from "./CartItem";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:9000/api/view").then((res) => {
      setCartProducts(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar
        path="/"
        buttonText="Home"
        path_second={"/login"}
        text={"Login"}
      />
      <CartContainer>
        <h2>Cart Total: $10</h2>
        <CheckButton onClick={() => navigate("/checkout")}>
          Checkout Cart
        </CheckButton>
        {cartProducts.map((product) => {
          return (
            <CartItem
              productID={product._id}
              imageUrl={product.productImageURL}
              title={product.productTitle}
              productPrice={product.productPrice}
            />
          );
        })}
      </CartContainer>
    </div>
  );
};

const CartContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 25px;
    font-weight: 500;
  }
`;

const CheckButton = styled.button`
  min-height: 40px;
  max-width: 160px;
  padding: 12px;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  background-color: black;
  color: white;
  border-radius: 99px;
  margin: auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

export default ShoppingCart;
