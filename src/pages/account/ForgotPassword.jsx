import { Formik } from "formik"; // Field, ErrorMessage
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Button from "../../components/common/button";
import { useNavigate } from "react-router-dom";
import FormInput from "../../components/common/formInput";
import { useDispatch } from "react-redux";
import { handleForgotPasswordReq } from "../../redux/auth/actions";
import LogoContainer from "../../components/common/logoContainer";
import ContentWrapper from "../../components/common/wrapper";
import Footer from "../../components/common/footer";

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
    <ContentWrapper>
      <div className="h-screen max-w-[1263px] flex flex-col justify-between   mx-auto">
        <div className=" lg:space-y-0 space-y-3 lg:max-h-[400px] m-auto lg:py-0 py-10 lg:gap-x-20 lg:grid lg:grid-cols-2">
        <LogoContainer description="Create an account to access personalized Bible interpretations and deepen your connection with scripture." />
        <div className="bg-white px-4 lg:px-9 rounded-3xl w-full lg:max-w-[542px] text-black">
          <p className="font-albert-sans font-medium text-xl lg:text-3xl lg:py-8 py-5 ">
            Forgot Password?
          </p>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              dispatch(
                handleForgotPasswordReq(values, navigate, setSubmitting)
              );
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
              <form className="space-y-5 " onSubmit={handleSubmit}>
                <FormInput
                  className="col-span-2"
                  heading="Email"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                  touched={touched.email}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-xs col-span-2 lg:text-sm mt-1">
                    {errors.email}
                  </div>
                )}
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
                <Button type="submit" text="Login" disabled={isSubmitting} />
              </form>
            )}
          </Formik>
          <p className="font-albert-sans py-5 text-xs lg:text-lg  ">
            Would you like to go back to the login page?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>
        </div>
        {/* <div className="col-span-2 bg-transparent"> */}
          <Footer />
        {/* </div> */}
      </div>
    </ContentWrapper>
  );
};

export default ForgotPassword;
