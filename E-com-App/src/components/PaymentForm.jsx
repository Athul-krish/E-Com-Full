import React from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import {
  CalendarMonthOutlined,
  CreditCard,
  KeyOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function PaymentForm() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        text="Home"
        buttonText={"Products"}
        path="/products"
        path_second="/login"
      />
      <SubMainContainer>
        <h2>Payment Details</h2>
        <form>
          <InputContainers>
            <CreditCard />
            <input type="text" placeholder="Card Number" />
          </InputContainers>
          <InputContainers>
            <PersonOutline />
            <input type="text" placeholder="Name On Card" />
          </InputContainers>
          <InputContainers>
            <CalendarMonthOutlined />
            <input type="text" placeholder="Expiry Date" />
          </InputContainers>
          <InputContainers>
            <KeyOutlined />
            <input type="text" placeholder="CVV" />
          </InputContainers>
          <PayButton onClick={() => navigate("/paymentSuccessful")}>
            Submit Payment
          </PayButton>
        </form>
      </SubMainContainer>
    </div>
  );
}

const SubMainContainer = styled.div`
  margin: auto;
  width: 300px;
  h2 {
    font-size: 24px;
    font-weight: 500;
  }
`;

const InputContainers = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 10px;
  padding: 10px;

  input {
    outline: none;
    border: none;
    height: 40px;
    width: 100%;
    margin-left: 5px;
  }
`;

const PayButton = styled.button`
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

export default PaymentForm;