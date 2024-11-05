import apis, { formAxios } from "../index";

export const loginUser = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("users/auth/signin", payload);
    const data = await response;
    // Return data or handle response as needed
    return data?.data;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
};

export const getUserSessions = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.get("/users/sessions", payload);
    const data = await response;
    // Return data or handle response as needed
    return data?.data;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
};
// export const socialLogin = async (provider, token) => {
//   try {
//     // Call your login API endpoint here
//     const response = await apis.post(`social/${provider}/authenticate`, token);
//     const data = await response;
//     // Return data or handle response as needed
//     return data;
//   } catch (error) {
//     // Handle errors appropriately
//     throw error;
//   }
// };
export const registerUser = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("users/auth/signup", payload);
    const data = await response;
    // Return data or handle response as needed
    return data?.data;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
};
export const updateProfile = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await formAxios.post("user/update-full-profile", payload);
    const data = await response;
    // Return data or handle response as needed
    return data;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
};
export const verifyOtp = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("/users/auth/email/verify", payload);
    const data = await response;
    // Return data or handle response as needed
    return data;
  } catch (error) {
    throw error;
  }
};

export const updatePassword = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("update-password", payload);
    const data = await response;
    // Return data or handle response as needed
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteProfileApi = async () => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("delete-my-account");
    const data = await response;
    // Return data or handle response as needed
    return data;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("users/auth/password/forgot", payload);
    const data = await response;
    // Return data or handle response as needed
    return data;
  } catch (error) {
    // Handle errors appropriately
    throw error;
  }
};

export const resetPasswordApi = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("users/auth/password/reset", payload);
    const data = await response;
    // Return data or handle response as needed
    return data;
  } catch (error) {
    throw error;
  }
};

export const resendOTPApi = async (payload) => {
  try {
    // Call your login API endpoint here
    const response = await apis.post("resend/otp", payload);
    const data = await response;
    // Return data or handle response as needed
    return data;
  } catch (error) {
    // Handle errors appropriately
    console.error("Error during login:", error);
    throw error;
  }
};
