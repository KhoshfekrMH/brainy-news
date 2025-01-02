import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button, Box, Typography, Link } from "@mui/material";
import { UserContext } from "../../../../shared/context/UserContext";

const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
});

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newUser = signUp(values.name, values.email, values.password);
      if (newUser) {
        setError("");
        navigate("/dashboard");
      } else {
        setError("User With this email elready exists");
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
        Sign Up
      </Typography>
      <TextField
        fullWidth
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
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
        Sign Up
      </Button>
      <Typography
        sx={{
          mt: 2,
          color: "#ffffff",
          textAlign: "center",
        }}
      >
        Don't have an account?{" "}
        <Link
          href="/*UNDER CONSTRUCTION*/" //TODO: navigate to Sign Up
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
          Log In
        </Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
