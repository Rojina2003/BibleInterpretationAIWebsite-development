import React from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  InputLabel,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./account.css"; // Import your CSS
import { CheckBox } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterReq } from "../../redux/auth/actions";
import Loader from "../../components/Loader";

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  secondName: Yup.string().required("Last name is required"),
  termsAgree: Yup.boolean()
    .oneOf([true], "Please accept the Terms and Conditions")
    .required("Please accept the Terms and Conditions"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <>
      <Box className="login-section">
        <Grid
          container
          sx={{
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="content-section"
        >
          {/* Left Section */}
          <Grid item xs={12} md={6} lg={5}>
            <Box className="left-section">
             <Link href="/">
              <img src="./assets/images/bible-logo.png" />
              </Link>
              <Typography variant="h1">
                Join the Journey of Faith and Understanding
              </Typography>
              <Typography variant="body1">
                Create an account to access personalized Bible interpretations
                and deepen your connection with scripture.
              </Typography>
            </Box>
          </Grid>

          {/* Right Section (Sign-Up Form) */}
          <Grid item xs={12} md={6} lg={4}>
            <Box className="login-box">
              <Typography variant="h5" gutterBottom>
                Sign up
              </Typography>

              {/* Formik for form handling */}
              <Formik
                initialValues={{
                  firstName: "",
                  secondName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                  termsAgree: undefined,
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  // delete values?.confirmPassword; // or use => delete test['blue'];

                  dispatch(handleRegisterReq(values, navigate, setSubmitting));
                }}
              >
                {({
                  isSubmitting,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  values,
                  touched,
                  errors,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    {/* First Name Field */}
                    <Grid spacing={2} container>
                      <Grid item xs={12} md={6} lg={6}>
                        <InputLabel sx={{fontWeight: "500", color: "black"}}>First Name</InputLabel>
                        <TextField
                          fullWidth
                          variant="outlined"
                          // label="First name"
                          name="firstName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          error={touched.firstName && Boolean(errors.firstName)}
                          helperText={touched.firstName && errors.firstName}
                          className="login-field"
                          placeholder="First Name"
                        />
                      </Grid>
                      <Grid item xs={12} md={6} lg={6}>
                        <InputLabel sx={{fontWeight: "500", color: "black"}}>Last Name</InputLabel>

                        {/* Second Name Field */}
                        <TextField
                          fullWidth
                          variant="outlined"
                          // label="Second name"
                          name="secondName"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.secondName}
                          error={
                            touched.secondName && Boolean(errors.secondName)
                          }
                          helperText={touched.secondName && errors.secondName}
                          className="login-field"
                          placeholder="Last Name"
                        />
                      </Grid>
                    </Grid>
                    {/* Email Field */}
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
                      placeholder="Email Address"
                    />
                    <Grid spacing={2} container>
                      <Grid item xs={12} md={6} lg={6}>
                        <InputLabel sx={{fontWeight: "500", color: "black"}}>Password</InputLabel>

                        {/* Password Field */}
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
                          placeholder="Password"
                        />
                      </Grid>

                      {/* Confirm Password Field */}
                      <Grid item xs={12} md={6} lg={6}>
                        <InputLabel sx={{fontWeight: "500", color: "black"}}>Confirm Password</InputLabel>

                        <TextField
                          fullWidth
                          variant="outlined"
                          // label="Confirm Password"
                          name="confirmPassword"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          error={
                            touched.confirmPassword &&
                            Boolean(errors.confirmPassword)
                          }
                          helperText={
                            touched.confirmPassword && errors.confirmPassword
                          }
                          className="login-field"
                          placeholder="Confirm Password"
                        />
                      </Grid>
                    </Grid>
                    {touched.termsAgree && Boolean(errors.termsAgree) ? (
                      <div style={{ color: "red" }}>{errors?.termsAgree}</div>
                    ) : (
                      ""
                    )}

                    {/* Terms & Privacy Policy */}

                    {/* Submit Button */}
                    
                    <Box className="footer-text">
                      <Typography variant="body2" align="left">
                        By clicking "Create account" above, you acknowledge that
                        you will receive updates from the bibleinterpretation
                        team and that you have read, understand, and agreed to
                        bibleinterpretation's{" "}
                        <Link href="/terms-and-conditions">Terms & Conditions</Link> and{" "}
                        <Link href="/privacy-policy">Privacy Policy</Link>.
                      </Typography>
                    </Box>

                    <FormControlLabel
                      className="agree-checkbox-label"
                      control={
                        <Checkbox
                          name="termsAgree"
                          className="agree-checkbox"
                          error={
                            touched.termsAgree && Boolean(errors.termsAgree)
                          }
                          helperText={touched.termsAgree && errors.termsAgree}
                          onChange={(e) => {
                            setFieldValue("termsAgree", e.target?.checked);
                          }}
                        />
                      }
                      label="I agree to terms and conditions"
                    />
                    <Button
                      fullWidth
                      type="submit"
                      className="login-button"
                      disabled={isSubmitting}
                    >
                      Create an account
                    </Button>
                  </Form>
                )}
              </Formik>

              <Box className="account-footer-text">
                <Typography variant="body2" className="label-section">
                  Already have an account?
                </Typography>
                <Button
                  variant="outlined"
                  className="footer-redirect-btn"
                  href="/login"
                >
                  Log in
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

export default Signup;
