import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getAuth, signOut } from "firebase/auth";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar } from "@mui/material";

const UserDetails = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [userName, setUsername] = useState();
  const [userPhoneNum, setUserPhoneNum] = useState();

  useEffect(() => {
    // fetch user details for current user.
    axios
      .get("http://localhost:9000/accounts/viewUsers", {
        params: { userEmail: currentUser.email },
      })
      .then((res) => {
        setUsername(res.data[0].username);
        setUserPhoneNum(res.data[0].userPhoneNumber);
      });
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <DetailsContainer>
      <Navbar path="/" buttonText="Home" />
      <MainDetails>
        <h1>User Details: </h1>
        <Avatar sx={{ height: "100px", width: "100px", margin: "auto" }} />
        <h2>Username: {userName}</h2>
        <h2>Phone Number: {userPhoneNum}</h2>
        <h2>Email: {currentUser.email}</h2>
        <LogOutButton onClick={logOut}>Log Out</LogOutButton>
        <EditButton onClick={() => navigate("/editUser")}>Edit User Details</EditButton>
      </MainDetails>
    </DetailsContainer>
  );
};

const DetailsContainer = styled.div`
  h1 {
    font-size: 24px;
    font-weight: 500;
  }
  h2 {
    font-size: 20px;
    font-weight: 400;
  }
`;

const MainDetails = styled.div`
  padding: 20px;
  margin: auto;
`;

const LogOutButton = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  font-weight: 500;
  width: 120px;
  cursor: pointer;
  margin-left: 10px;
`;

const EditButton = styled.button`
  outline: none;
  border: none;
  padding: 10px;
  background-color: black;
  color: white;
  font-size: 18px;
  border-radius: 20px;
  font-weight: 500;
  width: 180px;
  cursor: pointer;
  margin-left: 10px;
`;

export default UserDetails;
