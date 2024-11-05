import { Formik } from "formik"; //, Form, Field, ErrorMessage
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterReq } from "../../redux/auth/actions";
import Loader from "../../components/Loader";
import FormInput from "../../components/common/formInput";
import LeftContainer from "../../components/common/leftContainer";
import googleIcon from "../../assets/img/devicon_google.png";
import fbIcon from "../../assets/img/logos_facebook.png";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ContentWrapper from "../../components/common/wrapper";
import Button from "../../components/common/button";

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

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  return (
    <ContentWrapper>
      <div className=" lg:h-screen h-full max-w-[1275px] px-5 py-10 grid lg:grid-cols-2 gap-10 lg:gap-20 mx-auto items-center  ">
      <LeftContainer
       description="Create an account to access personalized Bible interpretations and deepen your connection with scripture."
       />
        <div className="bg-white  py-5 mx-auto rounded-3xl font-albert-sans lg:max-w-[542px]  ">
         <div className="lg:max-h-[600px] lg:px-9 px-5 h-full  custom-scrollbar" >
         <h2 className="font-medium lg:text-3xl text-base pb-6 ">Sign up</h2>
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
              <form onSubmit={handleSubmit}>
                <div className="md:grid  gap-5 lg:space-y-0 space-y-4 grid-cols-2">
                  <div className="pt-4 lg:pt-0 " >
                    <FormInput
                      heading="First Name"
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.firstName}
                      touched={touched.firstName}
                    />
                    {touched.firstName && errors.firstName && (
                      <div className="text-red-500 text-xs lg:text-sm mt-1">
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div>
                    <FormInput
                      heading="Second Name"
                      type="text"
                      placeholder="Second Name"
                      name="Second Name"
                      value={values.secondName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.secondName}
                      touched={touched.secondName}
                    />
                    {touched.secondName && errors.secondName && (
                      <div className="text-red-500 text-xs lg:text-sm mt-1">
                        {errors.secondName}
                      </div>
                    )}
                  </div>

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
                  <div>
                    <FormInput
                      heading="Password"
                      placeholder="Password"
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={errors.password}
                      touched={touched.password}
                    />
                    {touched.password && errors.password && (
                      <div className="text-red-500 text-xs lg:text-sm mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>

                  <div>
                    <FormInput
                      heading="Confirm Password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      error={errors.confirmPassword}
                      touched={touched.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <div className="text-red-500 text-xs lg:text-sm mt-1">
                        {errors.confirmPassword}
                      </div>
                    )}
                  </div>
                  <Button type="submit" text="Create an account" disabled={isSubmitting} />
                  <p className="col-span-2 font-albert-sans font-medium text-xs lg:text-sm text-[#5D5D5D] ">
                    By clicking “Create account” above, you knowledge that you
                    will receive updates from the bibleinterpretation team and
                    that you have read, understand, and agreed to
                    bibleinterpretation’s
                    <Link
                      className="!text-[#5D5D5D] underline underline-offset-8"
                      to="/terms-and-conditions"
                    >
                      {" "}
                      Terms & Conditions{" "}
                    </Link>
                    and{" "}
                    <Link
                      className="!text-[#5D5D5D] underline underline-offset-8 "
                      to="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </p>
                  <div className="col-span-2  items-center">
                    <input
                      type="checkbox"
                      id="termsAgree"
                      name="termsAgree"
                      className="hidden"
                      onChange={(e) => {
                        setFieldValue("termsAgree", e.target.checked);
                      }}
                      onBlur={handleBlur}
                    />
                    <label
                      htmlFor="termsAgree"
                      className="flex items-center cursor-pointer"
                    >
                      <span
                        className={`w-5 h-5 px-3 py-3 border border-gray-400 flex items-center justify-center rounded ${
                          values.termsAgree ? "bg-black" : "bg-white"
                        }`}
                      >
                        {values.termsAgree && (
                          <span className="text-white text-lg font-bold">
                            <Check />
                          </span>
                        )}
                      </span>
                      <span
                        className={`ml-2 text-sm lg:text-sm ${
                          values.termsAgree ? "text-black" : "text-[#5D5D5D]"
                        }`}
                      >
                        I agree to terms and conditions
                      </span>
                    </label>
                    {touched.termsAgree && Boolean(errors.termsAgree) ? (
                      <div className="text-red-600 text-sm font-albert-sans col-span-2">
                        {errors?.termsAgree}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </form>
            )}
          </Formik>
          <p className="flex items-center w-full my-5 mx-auto">
            <span className="flex-grow border-b border-[#999999]"></span>
            <span className="mx-4 text-[#999999]">or</span>
            <span className="flex-grow border-t border-[#999999]"></span>
          </p>
          <div className="space-y-4 pb-4">
            <button className="border-black w-full rounded-3xl border py-2 ">
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
          </div>

          <div className="flex justify-between items-center">
            <p className="font-albert-sans font-bold text-xs lg:text-lg  ">
              Already have an account?
            </p>
            <button className="border-[1px] lg:py-3 px-7 rounded-xl w-fit border-black ">
              <Link
                to="/login"
                className="font-medium font-albert-sans !no-underline  !text-black text-sm lg:text-lg"
              >
                Log in
              </Link>
            </button>
          </div>
         </div>
        </div>
      </div>
      {isLoading ? <Loader open={isLoading} message="" /> : ""}
    </ContentWrapper>
  );
};

export default SignUp;
