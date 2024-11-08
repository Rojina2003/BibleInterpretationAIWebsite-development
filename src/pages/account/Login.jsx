import { useState } from "react";
import FormInput from "../../components/common/formInput";
import { Link } from "react-router-dom";
import { Formik } from "formik"; //Field, ErrorMessage
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginReq } from "../../redux/auth/actions";
import { EyeOff, Eye } from "lucide-react";
import Loader from "../../components/Loader";
import ContentWrapper from "../../components/common/wrapper";
import Button from "../../components/common/button";
import googleIcon from "../../assets/img/devicon_google.png";
import fbIcon from "../../assets/img/logos_facebook.png";
import LogoContainer from "../../components/common/logoContainer";
import Footer from "../../components/common/footer";
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
  const { isLoading } = useSelector((state) => state.auth); //isAuthenticated,
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (values, setSubmitting) => {
    dispatch(handleLoginReq(values, navigate, setSubmitting));
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <ContentWrapper>
      <div className="min-h-screen h-full max-w-[1263px] mx-auto lg:space-y-0 space-y-3 gap-x-5 items-center  pt-5 lg:gap-x-20 lg:grid grid-cols-2 ">
        <LogoContainer description="Create an account to access personalized Bible interpretations and deepen your connection with scripture." />
        <div className="bg-white px-4 lg:px-9 rounded-3xl w-full lg:max-w-[542px] text-black">
          <p className="font-albert-sans font-medium text-xl lg:text-3xl  py-5 ">
            Log in
          </p>
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
              <form className="lg:space-y-5 space-y-2" onSubmit={handleSubmit}>
                {/* Email Field */}
                <>
                  {/* <InputLabel sx={{ fontWeight: "500", color: "black" }}>
                      Email
                    </InputLabel>
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
                    /> */}
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
                </>

                {/* Password Field with Toggle Visibility */}
                {/* <div className="w-100">
                    <InputLabel sx={{ fontWeight: "500", color: "black" }}>
                      Password
                    </InputLabel>
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                      placeholder="Password"
                    />
                  </div> */}
                <div>
                  <label className="font-albert-sans font-medium text-xs lg:text-sm mb-2 ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="bg-[#F1F0EE] rounded-lg w-full py-2 px-4  "
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={handleClickShowPassword}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                  </div>
                  {touched.password && errors.password && (
                    <div className="text-red-500 text-xs mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>
                <Link className="flex justify-end" to="/forgotten-password">
                  Forgot Password?
                </Link>
                {/* Submit Button */}
                <Button
                  type="submit"
                  text="Create an account"
                  disabled={isSubmitting}
                />
              </form>
            )}
          </Formik>
          <p className="flex items-center w-full my-5 mx-auto">
            <span className="flex-grow border-b border-[#999999]"></span>
            <span className="mx-4 text-[#999999]">or</span>
            <span className="flex-grow border-t border-[#999999]"></span>
          </p>
            <button className="border-black w-full rounded-3xl border mb-3 py-2 ">
              <h1 className="flex justify-center text-[#545555] items-center gap-4">
                <img className="h-fit" src={googleIcon} /> Sign up with Google
              </h1>
            </button>
            <button className="border-black w-full rounded-3xl border py-2 ">
              <h1 className="flex justify-center text-[#545555] items-center gap-4">
                <img className="h-fit" src={fbIcon} />
                Sign up with Facebook
              </h1>
            </button>
          <div className="flex justify-between py-5 items-center">
            <p className="font-albert-sans font-bold text-xs lg:text-lg  ">
              Already have an account?
            </p>
            <button className="border-[1px] lg:py-3 px-7 lg:rounded-xl rounded-md w-fit border-black ">
              <Link
                to="/sign-up"
                className="font-medium font-albert-sans !no-underline whitespace-nowrap !text-black text-sm lg:text-lg"
              >
                Sign up
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-2 bg-transparent">
          <Footer />
        </div>
      </div>
      {isLoading ? <Loader open={isLoading} message="" /> : ""}
    </ContentWrapper>
  );
};

export default LoginPage;
