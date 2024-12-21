import React from "react";
import { AppBar, Toolbar, Typography, Box, Link } from "@mui/material";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/*=== Top Section ===*/}
      <Box className="footer-top">
        {/* == Address ==*/}
        <Box className="footer-left">
          <Typography variant="body1">
            Address: 123 Main Street, City, Country
          </Typography>
          <Typography variant="body1">Phone: (123) 456-7890</Typography>
          <Typography variant="body1">Email: 7d2YI@example.com</Typography>
        </Box>

        {/* == NavBar links ==*/}
        <Box className="footer-right">
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/news" className="footer-link">
            News
          </Link>
          <Link href="/dashboard" className="footer-link">
            Dashboard
          </Link>
        </Box>
      </Box>

      {/*=== Bottom Section ===*/}
      <Box className="footer-bottom">
        <Typography variant="caption">
          Codded by{" "}
          <Link
            href="https://github.com/KhoshfekrMH"
            target="_blank"
            rel="noopener noreferrer"
            classsName="footer-link"
          >
            Khoshfekr
          </Link>{" "}
          with ❤️ & 🍵
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
