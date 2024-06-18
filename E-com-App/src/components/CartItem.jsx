import axios from "axios";
import React from "react";
import styled from "styled-components";

const CartItem = ({ productID, imageUrl, title, productPrice }) => {
  const deleteItem = async () => {
    await axios
      .delete(`http://localhost:9000/api/delete/${productID}`)
      .then((response) => alert("Item Deleted."))
      .catch((err) => alert("Failed To Remove."));
    window.location.reload();
  };

  return (
    <CartDiv>
      <ProductImage src={imageUrl} alt="product" />
      <ProductDetails>
        <h2>{title}</h2>
        <h2>Price: ${productPrice}</h2>
        <DeleteButton onClick={deleteItem}>Delete From Cart</DeleteButton>
      </ProductDetails>
    </CartDiv>
  );
};

const CartDiv = styled.div`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  height: 200px;
  width: fit-content;
  border: 1px solid lightgrey;
  margin: auto;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  height: 160px;
  border-radius: 20px;
`;

const ProductDetails = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const DeleteButton = styled.button`
  outline: none;
  border: none;
  border-radius: 99px;
  color: white;
  background-color: black;
  font-size: 16px;
  font-weight: 500;
  padding: 12px;
  cursor: pointer;
`;

export default CartItem;
