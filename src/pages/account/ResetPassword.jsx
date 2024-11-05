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
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleResetPasswordReq } from "../../redux/auth/actions";
import "./account.css"; // Import your CSS file

// Validation schema using Yup
const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPassword = () => {
    const { registeredMail, isLoading, statusMessage, otp } = useSelector(
        (data) => data.auth
      );
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
        <Grid item xs={12} md={7} lg={7}>
          <Box className="left-section">
            <Link href="/">
            <img src="./assets/images/bible-logo.png" />
            </Link>
            <Typography variant="h1">
              Join the Journey of Faith and Understanding
            </Typography>
            <Typography variant="subtitle1" color="#EA9DA1">
              Reset your password to regain access to personalized Bible interpretations.
            </Typography>
          </Box>
        </Grid>

        {/* Right Section (Reset Password Form) */}
        <Grid item xs={12} md={5} lg={5} sm={5}
          sx={{ ml: { xs: 0, sm: -5, md: -10, lg: -20 } }}
        >
          <Box className="login-box">
            <Typography variant="h5" gutterBottom mt={2} mb={3}>
              Reset Password
            </Typography>

            {/* Formik for form handling */}
            <Formik
              initialValues={{ newPassword: "", confirmPassword: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                const data = {
                    email: registeredMail,
                    newPassword: values.newPassword,
                    // password_confirmation: values.password_confirmation,
                    otp: otp,
                  };
                dispatch(handleResetPasswordReq(data, navigate, setSubmitting));
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
                  {/* New Password Field */}
                  <Box mb={2}>
                    <InputLabel sx={{fontWeight: "500", color: "black"}}>New Password</InputLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="newPassword"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.newPassword}
                      error={touched.newPassword && Boolean(errors.newPassword)}
                      helperText={touched.newPassword && errors.newPassword}
                      className="login-field"
                      placeholder="New password"
                    />
                  </Box>

                  {/* Confirm Password Field */}
                  <Box mb={2}>
                    <InputLabel sx={{fontWeight: "500", color: "black"}}>Confirm Password</InputLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
                      name="confirmPassword"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.confirmPassword}
                      error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                      helperText={touched.confirmPassword && errors.confirmPassword}
                      className="login-field"
                      placeholder="Confirm Password"
                    />
                  </Box>

                  {/* Submit Button */}
                  <Button
                    fullWidth
                    type="submit"
                    className="login-button"
                    disabled={isSubmitting}
                  >
                    Reset Password
                  </Button>
                </Form>
              )}
            </Formik>

            <Box className="account-footer-text">
              <Typography variant="body2">
                Remember your password? <Link href="/login">Login</Link>
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResetPassword;
