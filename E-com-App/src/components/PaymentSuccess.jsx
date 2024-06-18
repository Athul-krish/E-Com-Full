import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { CheckCircleOutline } from "@mui/icons-material";

const PaymentSuccess = () => {
  return (
    <div>
      <Navbar
        text="Home"
        buttonText={"Products"}
        path="/products"
        path_second="/"
      />
      <MainContainer>
        <TitleContainer>
          <CheckCircleOutline fontSize="large" />
          <h1>Payment Successful!</h1>
        </TitleContainer>
        <h3>Your payment has been processed successfully.</h3>
        <HomeButton onClick={() => (window.location.href = "/")}>
          Return to Home
        </HomeButton>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  margin: auto;

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: green;
    margin-left: 5px;
  }

  h3 {
    font-size: 24px;
    font-weight: 500;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  border: none;
  background-color: green;
  color: white;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  cursor: pointer;
`;


export default PaymentSuccess;
