// import {
//   deleteProfileApi,
//   forgotPassword,
//   getMyPermissionsAPI,
//   loginUser,
//   registerUser,
//   resendOTPApi,
//   resetPasswordApi,
//   updatePasswordApi,
//   updateProfileInfoApi,
//   verifyOtp,
// } from "../../apis/services/authApi";
// import CommonToast from "../../components/toastContainer";
// import { getCommonDropDownValues } from "../common/action";
// import { updatePaymentState } from "../payment/actions";

import {
  forgotPassword,
  getUserSessions,
  loginUser,
  registerUser,
  resetPasswordApi,
  verifyOtp,
} from "../../apis/services/authApi";
import { addSession, deleteSessionApi } from "../../apis/services/chatApi";
import CommonToast from "../../components/toastContainer";

export const ActionTypes = {
  LOGIN_PENDING: "LOGIN_PENDING",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT_PENDING: "LOGOUT_PENDING",
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_ERROR: "LOGOUT_ERROR",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  FORGOT_PASSWORD_PENDING: "FORGOT_PASSWORD_PENDING",
  FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_ERROR: "FORGOT_PASSWORD_ERROR",
  SIGN_UP: "SIGN_UP",
  SIGN_UP_PENDING: "SIGN_UP_PENDING",
  SIGN_UP_SUCCESS: "SIGN_UP_SUCCESS",
  SIGN_UP_ERROR: "SIGN_UP_ERROR",
  VERIFY_OTP_LOADING: "VERIFY_OTP_LOADING",
  VERIFY_OTP_ERROR: "VERIFY_OTP_ERROR",
  VERIFY_OTP_SUCCESS: "VERIFY_OTP_SUCCESS",
  UPDATE_PROFILE_INFO_LOADING: "UPDATE_PROFILE_INFO_LOADING",
  UPDATE_PROFILE_INFO_SUCCESS: "UPDATE_PROFILE_INFO_SUCCESS",
  UPDATE_PROFILE_INFO_ERROR: "UPDATE_PROFILE_INFO_ERROR",
  UPDATE_PASSWORD_LOADING: "UPDATE_PASSWORD_LOADING",
  UPDATE_PASSWORD_SUCCESS: "UPDATE_PASSWORD_SUCCESS",
  UPDATE_PASSWORD_ERROR: "UPDATE_PASSWORD_ERROR",
  RESET_PASSWORD_LOADING: "RESET_PASSWORD_LOADING",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  RESET_PASSWORD_ERROR: "RESET_PASSWORD_ERROR",
  RESEND_OTP_LOADING: "RESEND_OTP_LOADING",
  RESEND_OTP_SUCCESS: "RESEND_OTP_SUCCESS",
  RESEND_OTP_ERROR: "RESEND_OTP_ERROR",
  DELETE_PROFILE_LOADING: "DELETE_PROFILE_LOADING",
  DELETE_PROFILE_SUCCESS: "DELETE_PROFILE_SUCCESS",
  DELETE_PROFILE_ERROR: "DELETE_PROFILE_ERROR",
  GET_MY_PERMISSIONS_LOADING: "GET_MY_PERMISSIONS_LOADING",
  GET_MY_PERMISSIONS_SUCCESS: "GET_MY_PERMISSIONS_SUCCESS",
  GET_MY_PERMISSIONS_ERROR: "GET_MY_PERMISSIONS_ERROR",
  SET_USER_SESSIONS: "SET_USER_SESSIONS", // New action type for sessions
  SET_SESSION_ID_SUCCESS: "SET_SESSION_ID_SUCCESS",
  SET_SESSION_ID_PENDING: "SET_SESSION_ID_PENDING",
  SET_SESSION_ID_ERROR: "SET_SESSION_ID_ERROR",
  DELETE_SESSION_PENDING: "DELETE_SESSION_PENDING",
  DELETE_SESSION_SUCCESS: "DELETE_SESSION_SUCCESS",
  DELETE_SESSION_ERROR: "DELETE_SESSION_ERROR",
  CLEAR_SESSION_SUCCESS:"CLEAR_SESSION_SUCCESS",
  SET_CURRENT_SESSION_SUCCESS:"SET_CURRENT_SESSION_SUCCESS",
  SET_SESSION_WITHOUT_USER:"SET_SESSION_WITHOUT_USER"
};

export const handleLoginReq = (data, navigate, setSubmitting) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_PENDING });
    loginUser(data)
      .then((response) => {
        if (response.data?.accessToken) {
          const userData = response.data?.user;

          userData.token = response.data?.accessToken;
          dispatch({
            type: ActionTypes.LOGIN_SUCCESS,
            payload: userData,
          });
          dispatch({type:"CLEAR_MESSAGES",payload:null})

          localStorage.setItem("token", userData?.token);
          CommonToast.notify("success", response?.data?.message);
          navigate("/");
          setSubmitting(false);

          // Call getUserSessions() after successful login
          getUserSessions()
            .then((sessionResponse) => {
              dispatch({
                type: ActionTypes.SET_USER_SESSIONS,
                payload: sessionResponse.data,
              });
            })
            .catch((sessionError) => {
              console.error("Error fetching user sessions:", sessionError);
              CommonToast.notify("error", "Failed to load user sessions");
            });
        } else
          CommonToast.notify(
            "error",
            response?.data?.message || "error logging in"
          );
        setSubmitting(false);
        // toast('Invalid Password', 'error')

        // dispatch({ type: ActionTypes.LOADER_STOP_AUTH })
      })
      .catch((error) => {
        setSubmitting(false);
        CommonToast.notify(
          "error",
          error?.response?.data?.error || "error logging in"
        );

        // toast(error.response.data.detail, 'error')
        dispatch({ type: ActionTypes.LOGIN_ERROR });
      });
    // navigate('/dashboard')LOGIN_SUCCESS
  };
};
export const handleRegisterReq = (data, navigate, setSubmitting) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SIGN_UP_PENDING });
    registerUser(data)
      .then((response) => {
        const userEmail = response.data?.user?.email;
        // userData.token = response.data?.token;
        dispatch({
          type: ActionTypes.SIGN_UP_SUCCESS,
          payload: userEmail,
        });
        CommonToast.notify("success", "Registered Successfully");
        navigate("/verify-otp");
        setSubmitting(false);

        // toast('Invalid Password', 'error')
        dispatch({ type: ActionTypes.SIGN_UP_ERROR });
      })
      .catch((error) => {
        setSubmitting(false);
        CommonToast.notify("error", error?.response?.data?.error);
        // toast(error.response.data.detail, 'error')
        dispatch({ type: ActionTypes.LOGIN_ERROR });
      });
  };
};
export const clearSessionId = () => ({
  type: ActionTypes.CLEAR_SESSION_SUCCESS,
  payload: '',
});
export const setCurrentSessionId = (id) => ({
  type: ActionTypes.SET_CURRENT_SESSION_SUCCESS,
  payload: id,
});

export const setSessionId = (sessionId,isAuthenticated) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SET_SESSION_ID_PENDING });
    if(isAuthenticated){

      addSession(sessionId)
        .then((response) => {
          dispatch({
            type: ActionTypes.SET_SESSION_ID_SUCCESS,
            payload: {
              session: sessionId?.sessionId,
              userSessions: response?.data?.user?.sessions,
            },
          });
          CommonToast.notify("success", response?.message);
          // setSubmitting(false);
        })
        .catch((error) => {
          CommonToast.notify("error", error?.response?.data?.error);
          dispatch({ type: ActionTypes.SET_SESSION_ID_ERROR });
        });
    }
    else{
      dispatch({
        type: ActionTypes.SET_SESSION_WITHOUT_USER,
        payload:sessionId?.sessionId,
      });
    }
  };
};

export const deleteSession = (sessionId) => {
  return (dispatch, getState) => {
    dispatch({ type: ActionTypes.DELETE_SESSION_PENDING });

    deleteSessionApi(sessionId)
      .then(() => {
        dispatch({
          type: ActionTypes.DELETE_SESSION_SUCCESS,
          payload: sessionId,
        });

        CommonToast.notify("success", "Session deleted successfully");
      })
      .catch((error) => {
        console.error("Error deleting session:", error);
        CommonToast.notify(
          "error",
          error?.response?.data?.message || "Failed to delete session"
        );

        dispatch({
          type: ActionTypes.DELETE_SESSION_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};

export const onVerifyOTP = (data, navigate, setIsSubmitting) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.VERIFY_OTP_LOADING });
    verifyOtp(data)
      .then((response) => {
        const { otp, is_forgot_password } = data;
        dispatch({
          type: ActionTypes.VERIFY_OTP_SUCCESS,
          payload: { otp, is_forgot_password },
        });

        if (is_forgot_password === "1") {
          navigate("/reset-password");
        } else {
          navigate("/login");
        }
        // setIsSubmitting(false);
        CommonToast.notify("success", "OTP Verified Successfully");
      })
      .catch((error) => {
        // setIsSubmitting(false);
        CommonToast.notify("error", error?.response?.data?.error);
        // toast(error.response.data.detail, 'error')
        dispatch({ type: ActionTypes.VERIFY_OTP_ERROR });
      });
  };
};

export const onLogout = (navigate) => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_SUCCESS", payload: {} });
    dispatch({ type: "CLEAR_STORE" });
    localStorage.removeItem("token");
    // navigate("/");
  };
};

export const handleForgotPasswordReq = (data, navigate, setSubmitting) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FORGOT_PASSWORD_PENDING });
    forgotPassword(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.FORGOT_PASSWORD_SUCCESS,
          payload: data,
        });
        CommonToast.notify("success", response?.data?.message);
        navigate("/verify-otp");
        if(setSubmitting)
        setSubmitting(false);
      })
      .catch((error) => {
        if(setSubmitting){
          setSubmitting(false);
        }
        CommonToast.notify("error", error?.response?.data?.error);
        dispatch({ type: ActionTypes.FORGOT_PASSWORD_ERROR });
      });
  };
};

export const getPermssions = () => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.GET_MY_PERMISSIONS_LOADING });
  };
};

export const updateProfileInfo = (data, resetForm) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_PROFILE_INFO_LOADING });
  };
};

export const deleteProfile = (navigate, setCancelDelete) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.DELETE_PROFILE_LOADING });
  };
};

export const updatePassword = (data, resetForm) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.UPDATE_PASSWORD_LOADING });
  };
};

export const handleResetPasswordReq = (data, navigate, setSubmitting) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESET_PASSWORD_LOADING });
    resetPasswordApi(data)
      .then((response) => {
        CommonToast.notify("success", response?.data?.message);
        navigate("/");
        dispatch({
          type: ActionTypes.RESET_PASSWORD_SUCCESS,
        });
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        CommonToast.notify(
          "error",
          error.response?.data.message || error.message
        );

        dispatch({ type: ActionTypes.RESET_PASSWORD_ERROR });
      });
  };
};

export const resendOTP = (data) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.RESEND_OTP_LOADING });
  };
};
