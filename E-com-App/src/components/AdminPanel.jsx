import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";


const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:9000/adminPanel/view/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const searchProduct = products.filter((product) => {
    return product.productTitle.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <Navbar
        text={"Login As User"}
        buttonText={"Home"}
        path="/"
        path_second="/login"
      />
      <AdminDetails>
        <ProductDetails>
          <h2>Current Products: </h2>
          <AddProduct onClick={() => navigate("/admin/newProduct")}>
            Add New Product
          </AddProduct>
        </ProductDetails>
        <SearchContainer>
          <Search style={{ color: "black" }} />

          <CustomInput
            variant="outlined"
            placeholder="Search for products brands and more.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              display: "flex",
              background: "#fff",
              marginLeft: "10px",
              width: "35%",
              borderRadius: "2px",
            }}
          ></CustomInput>
        </SearchContainer>
        <ProductsContainer>
          {searchProduct.map((product) => {
            return (
              <ProductCard
                productId={product._id}
                adminProduct
                productImage={product.productImageURL}
                productTitle={product.productTitle}
                productPrice={product.productPrice}
                productDescription={product.productDescription}
              />
            );
          })}
        </ProductsContainer>
      </AdminDetails>
    </div>
  );
};

const AdminDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  h2 {
    font-size: 22px;
    font-weight: 500;
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  /* align-items: center; */
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  height: fit-content;
  padding: 20px;
  gap: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  align-items: center;
`;

const AddProduct = styled.button`
  outline: none;
  border: none;
  width: 180px;
  border-radius: 99px;
  height: 40px;
  font-size: 17px;
  font-weight: 500;
  background-color: black;
  color: white;
  margin-left: 20px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  display: flex;
  width: 350px;
  padding: 10px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgrey;
`;

const CustomInput = styled.input`
  display: flex;
  min-width: 240px;
  outline: none;
  border: none;
  background-color: white;
`;

export default AdminPanel;
