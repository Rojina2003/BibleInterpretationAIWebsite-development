import React, { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  Link,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleForgotPasswordReq, onVerifyOTP } from "../../redux/auth/actions";
import Loader from "../../components/Loader";
// import "./account.css"; // Import CSS for the custom styles

const VerifyEmailDialog = ({ open, onClose, email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const { registeredMail, isForgotPassword, isLoading } = useSelector((data) => data.auth);

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
      <Dialog open={true} fullWidth maxWidth="xs" PaperProps={{ sx: { borderRadius: 4 } }}>
        <DialogContent>
          <Box textAlign="">
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Verify your email
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              We sent a code to <strong>{email}</strong>
            </Typography>

            <Box display="flex" className="otp-container">
              {otp.map((digit, index) => (
                <TextField
                  key={index}
                  value={digit}
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  inputRef={inputRefs[index]}
                  inputProps={{
                    maxLength: 1,
                    style: { textAlign: "center", fontSize: "24px" },
                  }}
                  sx={{
                    width: 60,
                    height: 58,
                    borderRadius: "8px",
                    "& input": { padding: "0", height: 56, width: 36 },
                    "& fieldset": { border: "1px solid #d1d1d1" },
                    "&:focus-within fieldset": { borderColor: "red" },
                  }}
                  type="text"
                />
              ))}
            </Box>

            <Box mt={2}>
              <Typography variant="body2" color="textSecondary">
                Didn’t get a code?{" "}
                <Link sx={{cursor:'pointer'}}  onClick={() => dispatch(handleForgotPasswordReq({email:registeredMail,is_forgot_password:isForgotPassword ? isForgotPassword : false},navigate,null))}>
                  Click to resend
                </Link>
              </Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "white",
                mt: 4,
                borderRadius: 2,
                padding: "10px 0",
              }}
              disabled={otp.join("").length !== 4}
              onClick={handleSubmit}
            >
              Continue
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
      {isLoading && <Loader open={isLoading} />}
    </>
  );
};

export default VerifyEmailDialog;
