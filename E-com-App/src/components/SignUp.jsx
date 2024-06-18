import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const navigate = useNavigate();

  const signUp = async () => {
    try {
      axios.post("http://localhost:9000/accounts/newUser", {
        username: username,
        userPhoneNumber: phoneNum,
        userEmail: email,
      });
      await createUserWithEmailAndPassword(auth, email, password).then((res) => navigate("/", { replace: true }));
    } catch (err) {
      alert(err.message);
    }
    navigate("/", { replace: true });
  };

  return (
    <div>
      <Navbar
        text={"Sign In"}
        buttonText={"Home"}
        path={"/"}
        path_second={"/login"}
      />
      <br />
      <br />
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            sx={{
              padding: "20px",
              bgcolor: "white",
              height: "80vh",
              borderColor: "black",
              marginTop: "4%",
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);",
            }}
          >
            <Typography
              variant="h3"
              style={{ fontWeight: "600", fontSize: "35px" }}
            >
              Sign Up{" "}
            </Typography>
            <br />

            <TextField
              onChange={(e) => setUsername(e.target.value)}
              sx={{}}
              variant="filled"
              label="Username"
            ></TextField>
            <br />
            <br />

            <TextField
              onChange={(e) => setPhoneNum(e.target.value)}
              sx={{}}
              variant="filled"
              label="Phone Number"
            ></TextField>
            <br />

            <br />
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              sx={{}}
              variant="filled"
              label="Email"
            ></TextField>
            <br />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              sx={{ marginTop: "30px" }}
              variant="filled"
              label="Password"
              type="password"
            ></TextField>
            <br />
            <br />
            <Button
              onClick={signUp}
              variant="contained"
              style={{ backgroundColor: "#ef7b53", color: "white" }}
            >
              Sign Up
            </Button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>Existing User?</h4>
              <div style={{ width: "5px" }}></div>
              <a href="/login">Sign In!</a>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default SignUp;
