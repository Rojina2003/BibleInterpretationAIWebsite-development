const initialState = {
  isAuthenticated: false,
  userData: {},
  registeredMail: "",
  isLoadingAuth: false,
  isLoadingReg: false,
  isLoading: false,
  isForgotPassword: false,
  otp: null,
  userSessions: [],
  sessionId: null,
};

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOADER_START_AUTH":
      return {
        ...state,
        isLoadingAuth: true,
      };
    case "LOADER_STOP_AUTH":
      return {
        ...state,
        isLoadingAuth: false,
      };
    case "LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
        isLoading: false,
        sessionId: null,
      };
    case "SET_USER_SESSIONS":
      return {
        ...state,
        userSessions: action.payload, // Update sessions in state
        isLoading: false,
      };
    case "SET_SESSION_ID_SUCCESS":
      return {
        ...state,
        sessionId: action.payload?.session,
        userSessions: action?.payload?.userSessions,
        isLoading: false,
      };
    case "SET_SESSION_WITHOUT_USER":
      return {
        ...state,
        sessionId: action.payload,
        isLoading: false,
      };
    case "CLEAR_SESSION_SUCCESS":
      return {
        ...state,
        sessionId: null,
      };
    case "SET_CURRENT_SESSION_SUCCESS":
      return {
        ...state,
        sessionId: action.payload,
      };
    case "DELETE_SESSION_PENDING":
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case "DELETE_SESSION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        userSessions: state.userSessions.filter(
          (session) => session.sessionId !== action.payload // Filter out deleted session
        ),
      };

    case "DELETE_SESSION_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        userData: [],
      };
    case "SIGN_UP_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "SIGN_UP_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "SIGN_UP_SUCCESS":
      return {
        ...state,
        registeredMail: action?.payload,
        isForgotPassword: false,
        isLoading: false,
      };
    case "VERIFY_OTP_LOADING":
      return {
        ...state,
        isLoading: true,
        statusMessage: "Verifying OTP",
      };
    case "VERIFY_OTP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isForgotPassword: false,
        otp: action?.payload?.otp,
        statusMessage: "",
        isAuthenticated:
          action?.payload?.is_forgot_password !== "1" ? true : false,
      };
    case "VERIFY_OTP_ERROR":
      return {
        ...state,
        isLoading: false,
        statusMessage: "",
      };
    case "UPDATE_PROFILE_INFO_LOADING":
      return {
        ...state,
        isLoading: true,
        statusMessage: "Updating profile data",
      };
    case "UPDATE_PROFILE_INFO_ERROR":
      return {
        ...state,
        isLoading: false,
        statusMessage: null,
      };
    case "UPDATE_PROFILE_INFO_SUCCESS":
      return {
        ...state,
        isLoading: false,
        userData: {
          ...state.userData,
          ...action.payload,
        },
        statusMessage: null,
      };
    case "UPDATE_PASSWORD_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "UPDATE_PASSWORD_ERROR":
      return {
        ...state,
        isLoading: false,
      };
    case "UPDATE_PASSWORD_SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "FORGOT_PASSWORD_PENDING":
      return {
        ...state,
        isLoading: true,
        statusMessage: "Sending OTP",
      };
    case "FORGOT_PASSWORD_ERROR":
      return {
        ...state,
        isLoading: false,
        statusMessage: null,
      };
    case "FORGOT_PASSWORD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        registeredMail: action?.payload?.email,
        isForgotPassword: action?.payload?.is_forgot_password === false ? false : true,
        statusMessage: null,
      };
    case "RESET_PASSWORD_LOADING":
      return {
        ...state,
        isLoading: true,
        statusMessage: "Updating Password",
      };
    case "RESET_PASSWORD_ERROR":
      return {
        ...state,
        isLoading: false,
        statusMessage: null,
      };
    case "RESET_PASSWORD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        registeredMail: "",
        isForgotPassword: false,
        statusMessage: null,
        otp: null,
      };
    case "RESEND_OTP_LOADING":
      return {
        ...state,
        isLoading: true,
        statusMessage: "Resending OTP",
      };
    case "RESEND_OTP_ERROR":
      return {
        ...state,
        isLoading: false,
        statusMessage: null,
      };
    case "RESEND_OTP_SUCCESS":
      return {
        ...state,
        isLoading: false,
        statusMessage: null,
      };
    case "DELETE_PROFILE_LOADING":
      return {
        ...state,
        isLoading: true,
        statusMessage: "Deleting Profile",
      };
    case "DELETE_PROFILE_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        statusMessage: null,
        userData: [],
      };
    case "DELETE_PROFILE_ERROR":
      return {
        ...state,
        isLoading: false,
        statusMessage: null,
      };
    case "GET_MY_PERMISSIONS_SUCCESS":
      return {
        ...state,
        userData: {
          ...state.userData,
          permissions: action.payload,
        },
      };
    default:
      return state;
  }
};
