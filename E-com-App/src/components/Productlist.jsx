import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import axios from "axios";
import { Search } from "@mui/icons-material";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

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
        text={"Sign In"}
        buttonText={"Home"}
        path={"/"}
        path_second={"/login"}
      />

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

      <ProductRowContainer>
        {searchProduct.map((product) => {
          return (
            <ProductCard
              productImage={product.productImageURL}
              productTitle={product.productTitle}
              productPrice={product.productPrice}
              productDescription={product.productDescription}
            />
          );
        })}
      </ProductRowContainer>
    </div>
  );
};

const ProductRowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(16rem, 100%), 1fr));
  height: fit-content;
  padding: 20px;
  gap: 10px;
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

export default ProductList;
