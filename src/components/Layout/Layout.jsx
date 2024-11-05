import React from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
import "./Layout.css";
import { Link, Typography } from "@mui/material";

const Layout = () => {
  return (
    <Box className="main-container">
      {/* Black Blurred Overlay */}
      <Box className="black-overlay" />

      {/* Circular Red Gradient Overlay */}
      <Box className="red-gradient-overlay" />

      {/* <Toolbar /> */}
      <Outlet />
      <Box className="footer-links">
        <Typography variant="body2" mx={2}>
          Powered by{" "}
          <Link
            href="https://frabrahamfoundation.org/"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fr. Abraham Mutholath Foundation NFP
          </Link>
        </Typography>
        <Typography variant="body2">
          <Link href="/about-us" color="inherit">
            About us
          </Link>{" "}
          |{" "}
          <Link href="/terms-and-conditions" color="inherit">
            Terms & Conditions
          </Link>{" "}
          |{" "}
          <Link href="/privacy-policy" color="inherit">
            Privacy policies
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
