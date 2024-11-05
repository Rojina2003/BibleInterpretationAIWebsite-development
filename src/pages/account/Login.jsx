import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  TextField,
  Button,
  Box,
  Typography,
  Link,
  InputLabel,
  IconButton,
  InputAdornment,
  
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginReq } from "../../redux/auth/actions";
import "./account.css"; // Import your CSS file
import Loader from "../../components/Loader";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginPage = () => {
  const { isAuthenticated,isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, setSubmitting) => {
      dispatch(handleLoginReq(values,navigate,setSubmitting))
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
    <Box className="login-section">
      <Grid
        container
        sx={{
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
        className="content-section"
      >
        {/* Left Section */}
        <Grid item="true" xs={12} md={7} lg={7} sm={7}>
          <Box className="left-section">
            {/* <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              width="fit-content"
            > */}
             <Link href="/">
            <img style={{ width: '150px', marginBottom: '20px' }} src="./assets/images/bible-logo.png" alt="Bible Logo" />
            </Link>
            <Typography fontWeight={300} fontSize={24}>Bible Interpretation AI</Typography>
            {/* </Box> */}
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
        <Grid item="true" xs={12} md={5} lg={5} sm={5}
          sx={{ ml: { xs: 0, sm: -5, md: -10, lg: -20 } }}
        >
          <Box className="login-box">
            <Typography variant="h5" mb={3} gutterBottom>
              Log in
            </Typography>

            {/* Formik for form handling */}
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleSubmit(values, setSubmitting);
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

                  {/* Password Field with Toggle Visibility */}
                  <div className="w-100">
                    <InputLabel sx={{fontWeight: "500", color: "black"}}>Password</InputLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                      className="login-field"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Password"
                    />
                  </div>

                  <Box className="forgot-link">
                    <Link href="/forgotten-password">Forgot Password?</Link>
                  </Box>

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
              <Typography variant="body2" className="label-section">
                Don’t have an account?
              </Typography>
              <Button
                variant="contained"
                className="footer-redirect-btn"
                href="/sign-up"
              >
                Sign up
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
    {isLoading ? <Loader open={isLoading} message="" /> : ""}
    </>
  );
};

export default LoginPage;
