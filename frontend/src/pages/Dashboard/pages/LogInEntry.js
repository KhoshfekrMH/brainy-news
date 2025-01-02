import React from "react";
import { Box } from "@mui/material";
import LogIn from "../components/EntryUI/LogIn";
import Footer from "../../../shared/layout/Footer";

const SignInEntry = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #000000, #808080)", // Black to gray gradient
        }}
      >
        <LogIn />
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default SignInEntry;
