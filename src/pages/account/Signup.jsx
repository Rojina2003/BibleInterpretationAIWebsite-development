import { Formik } from "formik"; //, Form, Field, ErrorMessage
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleRegisterReq } from "../../redux/auth/actions";
import Loader from "../../components/Loader";
import FormInput from "../../components/common/formInput";
import bibleIcon from "../../assets/bible-icon.png";
import googleIcon from "../../assets/img/devicon_google.png";
import fbIcon from "../../assets/img/logos_facebook.png";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import ContentWrapper from "../../components/common/wrapper";

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
      <div className=" lg:h-screen h-full max-w-[1275px] px-5 py-10 flex flex-col lg:flex-row gap-10 lg:gap-20 mx-auto items-center  ">
        <div className="font-albert-sans space-y-6 text-white max-w-[629px] ">
          <Link href="/">
            <img src={bibleIcon} />
          </Link>
          <h1 className="font-bold text-3xl lg:text-4xl ">
            Join the Journey of Faith and Understanding
          </h1>
          <p className="lg:text-lg text-sm text-[#EA9DA1] ">
            Create an account to access personalized Bible interpretations and
            deepen your connection with scripture.
          </p>
        </div>
        <div className="bg-white lg:px-8 px-4 py-5  lg:max-h-[600px] h-full lg:overflow-auto rounded-3xl font-albert-sans max-w-[542px] ">
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
              <form onSubmit={handleSubmit}>
                <div className="lg:grid items-end gap-5 lg:space-y-0 space-y-4 grid-cols-2">
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
                  <FormInput
                    heading="Password"
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                  />
                  <FormInput
                    heading="Confirm Password"
                    placeholder="Confirm Password"
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <button
                    type="submit"
                    className="bg-[#CA0E18] py-2 text-center w-full col-span-2 text-white font-albert-sans font-bold rounded-xl text-xs lg:text-lg"
                    disabled={isSubmitting}
                  >
                    Create an account
                  </button>
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

          <div className="space-y-4 py-4">
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
      {isLoading ? <Loader open={isLoading} message="" /> : ""}
    </ContentWrapper>
  );
};

export default SignUp;
