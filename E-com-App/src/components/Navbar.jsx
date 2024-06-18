import {
  Button,
  IconButton,
  Toolbar,
  Typography,
  AppBar,
  Avatar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ text, buttonText, path, path_second }) => {
  const [user, setUser] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
      } else {
        setUser(false);
      }
    });
  }, []);
  // const user = firebase.auth().currentUser;
  return !user ? (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#ef7b53" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ApiIcon />
          </IconButton>
          <Typography variant="h5" component="div">
            E-Shopping
          </Typography>
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <Button
              style={{ color: "white" }}
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartIcon />
            </Button>{" "}
            &nbsp;
            <Button
              style={{ backgroundColor: "black" }}
              variant="contained"
              href={path_second}
              color="secondary"
            >
              {text}
            </Button>
            <Button
              variant="contained"
              style={{ marginLeft: "10px", backgroundColor: "black" }}
              href={path}
            >
              {buttonText}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  ) : (
    <div>
      <AppBar position="static" style={{ backgroundColor: "#ef7b53" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ApiIcon />
          </IconButton>
          <Typography variant="h5" component="div">
            E-Shopping
          </Typography>
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;
          <div style={{ display: "flex", marginLeft: "auto" }}>
            <Button
              style={{ color: "white" }}
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartIcon />
            </Button>{" "}
            &nbsp;
            <Button
              variant="contained"
              style={{
                marginLeft: "10px",
                backgroundColor: "black",
                marginRight: "14px",
              }}
              href={path}
            >
              {buttonText}
            </Button>
            <Link to="/userDetails">
              <Avatar />
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
