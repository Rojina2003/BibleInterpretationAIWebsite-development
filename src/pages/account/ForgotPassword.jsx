import React from "react";
import Grid from "@mui/material/Grid2";

import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  InputLabel,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./account.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleForgotPasswordReq } from "../../redux/auth/actions";
import bibleLogo from '../../assets/bible-logo.png';

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const ForgotPassword = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <Box className="login-section">
      <Grid
        container
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {/* Left Section */}
        <Grid item="true" xs={12} md={7} lg={7}>
          <Box className="left-section">
          <Link href="/">
            <img src={bibleLogo} />
            </Link>
            <Typography variant="h1">
              Join the Journey of Faith and Understanding
            </Typography>
            <Typography variant="subtitle1" color="#EA9DA1">
              Create an account to access personalized Bible interpretations and
              deepen your connection with scripture.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section (Login Form) */}
        <Grid item="true" xs={12} md={5} lg={5}
          sx={{ ml: { xs: 0, sm: -5, md: -10, lg: -20 } }}
        >
          <Box className="login-box">
            <Typography variant="h5" gutterBottom mt={2} mb={3}>
              Forgot Password?
            </Typography>

            {/* Formik for form handling */}
            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(handleForgotPasswordReq(values,navigate,setSubmitting))
              }}
            >
              {({
                isSubmitting,
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Form onSubmit={handleSubmit}>
                  {/* Email Field */}
                  <>
                    <InputLabel sx={{fontWeight: "500", color: "black"}}>Email</InputLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      // label="Email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      className="login-field"
                      placeholder="Email address"
                    />
                  </>

                  {/* Password Field */}
                  {/* <div className="w-100">
                    <InputLabel>Password</InputLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      // label="Password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      className="login-field"
                    />
                  </div> */}
                  {/* <Box className="footer-links">
                    <Link href="#">Forgot Password?</Link>
                  </Box> */}

                  {/* Submit Button */}
                  <Button
                    fullWidth
                    type="submit"
                    className="login-button"
                    disabled={isSubmitting}
                  >
                    Login
                  </Button>
                </Form>
              )}
            </Formik>

            <Box className="account-footer-text">
              <Typography variant="body2">
              Would you like to go back to the login page? <Link href="/login">Login</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForgotPassword;
