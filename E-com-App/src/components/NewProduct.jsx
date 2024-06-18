import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import {
  AbcOutlined,
  DescriptionOutlined,
  LinkOutlined,
  LocalOfferOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const NewProduct = ({ updateProduct }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageURL, setImageURL] = useState("");

  const updateData = {
    productTitle: title,
    productImageURL: imageURL,
    productPrice: price,
    productDescription: description,
  };

  const addProduct = async () => {
    navigate("/adminPanel");
    await axios.post("http://localhost:9000/adminPanel/addProduct", {
      productTitle: title,
      productImageURL: imageURL,
      productPrice: price,
      productDescription: description,
    });
  };

  const updateProductFunction = async () => {
    await axios
      .put(
        `http://localhost:9000/adminPanel/update/product/${data.productId}`,
        updateData
      )
      .then((res) => {
        alert("Product Updated.");
        navigate(`/adminPanel`);
      })
      .catch((err) => {
        console.log("Error Occured!");
      });
  };

  return !updateProduct ? (
    <div>
      <Navbar
        text={"Admin Panel"}
        buttonText={"Home"}
        path="/"
        path_second="/adminPanel"
      />
      <AddProductContainer>
        <h2>Add A New Product: </h2>
        <InputContainer>
          <AbcOutlined />
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product Title"
          />
        </InputContainer>
        <InputContainer>
          <DescriptionOutlined />
          <input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </InputContainer>
        <InputContainer>
          <LocalOfferOutlined />
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </InputContainer>
        <InputContainer>
          <LinkOutlined />
          <input
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Product Image URL"
          />
        </InputContainer>
        <AddProduct onClick={addProduct}>Add New Product</AddProduct>
      </AddProductContainer>
    </div>
  ) : (
    <div>
      <Navbar
        text={"Admin Panel"}
        buttonText={"Home"}
        path="/"
        path_second="/adminPanel"
      />
      <UpdateProductContaniner>
        <h2>Update Product: </h2>
        <UpdateProduct>
          <UpdateProductDetails>
            <h2>Title: {data.productTitle}</h2>
            <h3>Description: {data.productDescription}</h3>
            <h2>Price: ${data.productPrice}</h2>
          </UpdateProductDetails>
          <UpdateProductImage src={data.productImage} alt="product" />
        </UpdateProduct>
        <InputContainer>
          <AbcOutlined />
          <input
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Product Title"
          />
        </InputContainer>
        <InputContainer>
          <DescriptionOutlined />
          <input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </InputContainer>
        <InputContainer>
          <LocalOfferOutlined />
          <input
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
        </InputContainer>
        <InputContainer>
          <LinkOutlined />
          <input
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Product Image URL"
          />
        </InputContainer>
        <UpdateProductButton onClick={updateProductFunction}>
          Update Product
        </UpdateProductButton>
      </UpdateProductContaniner>
    </div>
  );
};

const AddProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  margin: auto;
  padding: 20px;
  h2 {
    font-size: 22px;
    font-weight: 500;
  }
`;

const UpdateProduct = styled.div`
  display: flex;
`;

const UpdateProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateProductImage = styled.img`
  max-height: 200px;
`;

const UpdateProductContaniner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  margin: auto;

  h2 {
    font-size: 18px;
    font-weight: 500;
  }

  h3 {
    font-size: 16px;
    font-weight: 500;
  }
`;

const InputContainer = styled.div`
  display: flex;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;

  input {
    outline: none;
    height: 30px;
    margin-left: 10px;
    width: 100%;
    border: none;
  }
`;

const AddProduct = styled.button`
  background-color: green;
  color: white;
  outline: none;
  border: none;
  font-size: 18px;
  height: 40px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

const UpdateProductButton = styled.button`
  background-color: green;
  color: white;
  outline: none;
  border: none;
  font-size: 18px;
  height: 40px;
  width: 200px;
  margin: auto;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;
`;

export default NewProduct;
