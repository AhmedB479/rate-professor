import React, { useState } from "react";
import "./Header.css";
import logo from "../../Image/logo.png";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Popover,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/ask", {
        question: query,
      });
      setResponse(res.data.answer);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src={logo}
            alt="AI"
            className="logo-img"
            style={{
              width: "100px",
            }}
          />
          <h1>AI Rate My Professor</h1>
        </div>
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
        <nav className={`nav ${isNavOpen ? "active" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#about">About</a>
            </li>
            <li className="nav-item">
              <button onClick={handleClick}>Find Prof..</button>
            </li>
            <li className="nav-item">
              <Link
                to="/all-professors"
                style={{
                  textDecoration: "none",
                }}
              >
                Professors
              </Link>
            </li>
            <li className="nav-item">
              <a href="#signup" className="cta-button secondary">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a href="#login">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            width: {
              xs: "80vw",
              sm: "40vw",
              md: "30vw",
            },
            height: "80vh",
            display: "flex",
            flexDirection: "column",
            background: "white",
            color: "black",
          },
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <IoMdCloseCircle />
        </IconButton>
        <Box
          sx={{
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Ask your question
          </Typography>
          <Divider sx={{ background: "white" }} />
          <Box sx={{ flex: 1, padding: 2 }}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Enter your query"
                value={query}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <Button variant="contained" onClick={handleSubmit}>
                Send
              </Button>
            </Stack>
            <Box sx={{ marginTop: 3 }}>
              <Typography variant="body1" sx={{ wordWrap: "break-word" }}>
                {response}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Popover>
    </div>
  );
};

export default Header;
