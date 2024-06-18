import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getAuth } from "firebase/auth";
import axios from "axios";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { PersonOutline, PhoneOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const EditUserDetails = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [userName, setUsername] = useState("");
  const [userPhoneNum, setUserPhoneNum] = useState("");
  const [userID, setUserID] = useState("");
  const updatedData = {
    username: userName,
    userPhoneNumber: userPhoneNum,
    userEmail: currentUser.email,
  };

  const updateDetails = async () => {
    await axios
      .put(
        `http://localhost:9000/accounts/update/userDetails/${userID}`,
        updatedData
      )
      .then((res) => {
        alert("User Details have Been Updated!");
        navigate("/userDetails");
      });
  };

  useEffect(() => {
    // fetch user details for current user.
    axios
      .get("http://localhost:9000/accounts/viewUsers", {
        params: { userEmail: currentUser.email },
      })
      .then((res) => {
        setUsername(res.data[0].username);
        setUserPhoneNum(res.data[0].userPhoneNumber);
        setUserID(res.data[0]._id);
        console.log(userID);
      });
  }, []);

  return (
    <div>
      <Navbar
        text="login"
        buttonText={"Products"}
        path="/products"
        path_second="/login"
      />
      <CurrentUserDetails>
        <Avatar
          sx={{
            height: "100px",
            width: "100px",
            margin: "auto",
          }}
        />
        <h2>Username: {userName}</h2>
        <h2>Phone Number: {userPhoneNum}</h2>
        <h2>Email: {currentUser.email}</h2>
      </CurrentUserDetails>
      <EditDetails>
        <InputContainer>
          <PersonOutline />
          <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </InputContainer>
        <InputContainer>
          <PhoneOutlined />
          <input
            onChange={(e) => setUserPhoneNum(e.target.value)}
            placeholder="Phone Number"
          />
        </InputContainer>
        <EditDetailsButton onClick={updateDetails}>
          Update Details
        </EditDetailsButton>
      </EditDetails>
    </div>
  );
};

const CurrentUserDetails = styled.div`
  padding: 20px;
  h2 {
    font-size: 20px;
    font-weight: 500;
  }
`;

const EditDetails = styled.div`
  margin-top: 10px;
  width: 30%;
  margin: auto;
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

const EditDetailsButton = styled.button`
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

export default EditUserDetails;
