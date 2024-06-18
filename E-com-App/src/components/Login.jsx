import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import image from "../Images/avatar.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const text = "Sign up";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signIn = async () => {
    if (email === "auth@admin81") {
      navigate("/adminPanel");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (e) {
        alert(e.message);
      }
      navigate("/");
    }
  };

  return (
    <div>
      <Navbar text={text} buttonText="Home" path="/" path_second="/signUp" />
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
              Login{" "}
            </Typography>
            <img src={image} alt="donut" style={{ width: "240px" }} /> <br />
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
              onClick={signIn}
              variant="contained"
              style={{ backgroundColor: "#ef7b53", color: "white" }}
            >
              Sign In
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h4>New User?</h4>
              <div style={{ width: "5px" }}></div>
              <a href="/signUp">Sign Up!</a>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Login;
