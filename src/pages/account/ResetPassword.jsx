import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleResetPasswordReq } from "../../redux/auth/actions";
import ContentWrapper from "../../components/common/wrapper";
import LeftContainer from "../../components/common/leftContainer";
import FormInput from "../../components/common/formInput";
import Button from "../../components/common/button";
import { Link } from "react-router-dom";


// Validation schema using Yup
const validationSchema = Yup.object({
  newPassword: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const ResetPassword = () => {
  const { registeredMail, otp } = useSelector((data) => data.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <ContentWrapper>
      <div className="lg:h-screen h-full max-w-[1263px] mx-auto lg:space-y-0 space-y-3 items-center gap-5 lg:py-0 py-10 lg:gap-20 grid lg:grid-cols-2 ">
        <LeftContainer description=" Reset your password to regain access to personalized Bible interpretations." />
        <div className="bg-white px-4 lg:px-9 rounded-3xl w-full lg:max-w-[542px] text-black">
          <p className="font-albert-sans font-medium text-xl lg:text-3xl lg:py-8 py-5 " >
            Reset Password
          </p>

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
              <form className="lg:space-y-5 space-y-2" onSubmit={handleSubmit}>
                {/* New Password Field */}

                <FormInput
                  className="col-span-2"
                  heading="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                  touched={touched.password}
                />
                {touched.password && errors.password && (
                  <div className="text-red-500 text-xs col-span-2 lg:text-sm mt-1">
                    {errors.password}
                  </div>
                )}

                {/* Confirm Password Field */}
                {/* <div >
                    <InputLabel sx={{ fontWeight: "500", color: "black" }}>
                      Confirm Password
                    </InputLabel>
                    <TextField
                      fullWidth
                      variant="outlined"
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
                  </div> */}
                <FormInput
                  heading="Confirm Password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  error={errors.confirmPassword}
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.confirmPassword}
                  type="password"
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-red-500 text-xs lg:text-sm mt-1">
                    {errors.confirmPassword}
                  </div>
                )}
                {/* Submit Button */}
                <Button
                  type="submit"
                  text="RESET PASSWORD"
                  disabled={isSubmitting}
                />
              </form>
            )}
          </Formik>

          <p className="font-albert-sans py-5 text-xs lg:text-lg  ">
            Remember your password? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default ResetPassword;
