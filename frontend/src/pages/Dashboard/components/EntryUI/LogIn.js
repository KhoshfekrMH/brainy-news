import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Box, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../shared/context/UserContext";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const { logIn } = useContext(UserContext); // Using logIn from UserContext
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const user = logIn(values.email, values.password);
      if (user) {
        setError("");
        console.log("Logged In:", user);
        navigate("/*UNDER CONSTRUCTION*/"); //TODO: navigate to Dashboard
      } else {
        setError("Invalid email or password");
      }
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        mx: "auto",
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        backgroundColor: "#1e1e1e",
        color: "#ffeb3b",
        borderRadius: 3,
        boxShadow: "0px 4px 15px rgba(255, 235, 59, 0.3)",
        maxWidth: 400,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          fontWeight: "bold",
          color: "#ffeb3b",
          textShadow: "1px 1px 4px rgba(255, 235, 59, 0.6)",
        }}
      >
        Log In
      </Typography>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin="normal"
        variant="outlined"
        sx={{
          backgroundColor: "#2e2e2e",
          label: { color: "#ffeb3b" },
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffeb3b",
            },
            "&:hover fieldset": {
              borderColor: "#fff176",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffeb3b",
            },
          },
          input: { color: "#ffffff" },
        }}
      />
      <TextField
        fullWidth
        id="password"
        name="password"
        label="Password"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        margin="normal"
        variant="outlined"
        sx={{
          label: { color: "#ffeb3b" },
          backgroundColor: "#2e2e2e",
          borderRadius: 1,
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ffeb3b",
            },
            "&:hover fieldset": {
              borderColor: "#fff176",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#ffeb3b",
            },
          },
          input: { color: "#ffffff" },
        }}
      />
      {error && (
        <Typography
          sx={{
            mt: 2,
            color: "#ff5722",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {error}
        </Typography>
      )}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#ffeb3b",
          color: "#000000",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#fff176",
            boxShadow: "0px 4px 8px rgba(255, 235, 59, 0.6)",
          },
        }}
      >
        Log In
      </Button>
      <Typography
        sx={{
          mt: 2,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        You have an account?{" "}
        <Link
          href="/sign-up"
          sx={{
            color: "#ffeb3b",
            fontWeight: "bold",
            TextDecoration: "none",
            "&:hover": {
              TextDecoration: "underline",
              color: "#fff176",
            },
          }}
        >
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
