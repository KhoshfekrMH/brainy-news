import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { UserContext } from "../../../shared/context/UserContext";
import SignUp from "../components/EntryUI/SignUp";
import Footer from "../../../shared/layout/Footer";

const SignUpEntry = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <React.Fragment>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #000000, #808080)",
        }}
      >
        <SignUp />
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default SignUpEntry;
