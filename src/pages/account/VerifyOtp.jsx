import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  Link,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleForgotPasswordReq, onVerifyOTP } from "../../redux/auth/actions";
import Loader from "../../components/Loader";
import Button from "../../components/common/button";
const VerifyEmailDialog = ({ open, onClose, email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const { registeredMail, isForgotPassword, isLoading } = useSelector(
    (data) => data.auth
  );

  const inputRefs = otp.map(() => useRef(null)); // Dynamic refs for each input field

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (/^\d{1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next field if there's a value, otherwise stay
      if (index < 3) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Handle backspace
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        if (index > 0) {
          inputRefs[index - 1].current.focus();
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handleSubmit = () => {
    const otpCode = otp.join("");
    const data = {
      otp: parseInt(otpCode),
      email: registeredMail,
      is_forgot_password: isForgotPassword ? "1" : "0",
    };
    dispatch(onVerifyOTP(data, navigate, null));
  };

  return (
    <>
      <Dialog
        open={true}
        fullWidth
        maxWidth="xs"
        PaperProps={{ sx: { borderRadius: 4 } }}
      >
        <DialogContent>
          <div className="items-center mx-auto flex flex-col gap-4 font-albert-sans">
            <p className="font-medium text-lg">Verify your email</p>
            <p>
              We sent a code to <span className="font-bold">{email}</span>
            </p>

            <div className="flex  space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={inputRefs[index]} // Using ref for input focus handling
                  maxLength={1}
                  className="w-14 h-14 text-center text-2xl border border-gray-300 rounded-lg focus:border-red-500 outline-none"
                  type="text"
                />
              ))}
            </div>

            <p>
              Didn’t get a code?{" "}
              <Link
                onClick={() =>
                  dispatch(
                    handleForgotPasswordReq(
                      {
                        email: registeredMail,
                        is_forgot_password: isForgotPassword
                          ? isForgotPassword
                          : false,
                      },
                      navigate,
                      null
                    )
                  )
                }
              >
                Click to resend
              </Link>
            </p>

            <Button
              type="submit"
              text="Continue"
              disabled={otp.join("").length !== 4}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {isLoading && <Loader open={isLoading} />}
    </>
  );
};

export default VerifyEmailDialog;
