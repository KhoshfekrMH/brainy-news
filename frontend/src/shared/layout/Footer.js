import React from "react";
import { Typography, Box, Link } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      {/*=== Top Section ===*/}
      <Box
        sx={{
          backgroundColor: "black",
          color: "yellow",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* == Address ==*/}
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography variant="body1">
            Address: 123 Main Street, City, Country
          </Typography>
          <Typography variant="body1">Phone: (123) 456-7890</Typography>
          <Typography variant="body1">Email: 7d2YI@example.com</Typography>
        </Box>

        {/* == NavBar links ==*/}
        <Box sx={{ flex: 1, textAlign: "right" }}>
          <Link
            href="/"
            sx={{
              color: "yellow",
              textDecoration: "none",
              marginLeft: "15px",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Home
          </Link>
          <Link
            href="/news"
            sx={{
              color: "yellow",
              textDecoration: "none",
              marginLeft: "15px",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            News
          </Link>
          <Link
            href="/dashboard"
            sx={{
              color: "yellow",
              textDecoration: "none",
              marginLeft: "15px",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Dashboard
          </Link>
        </Box>
      </Box>

      {/*=== Bottom Section ===*/}
      <Box
        sx={{
          backgroundColor: "black",
          color: "yellow",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontSize: "0.85rem",
            fontFamily: '"Playwrite AU VIC Guides", sans-serif',
            fontWeight: 400,
            fontStyle: "normal",
          }}
        >
          Coded by{" "}
          <Link
            href="https://github.com/KhoshfekrMH"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: "yellow",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Khoshfekr
          </Link>{" "}
          with 🧠 & 🍵
        </Typography>
      </Box>
    </footer>
  );
};

export default Footer;
