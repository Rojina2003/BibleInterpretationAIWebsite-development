import apis, { formAxios } from "../index";

export const addSession = async (payload) => {
    try {
      // Call your login API endpoint here
      const response = await apis.post("users/sessions", payload);
      const data = await response;
      // Return data or handle response as needed
      return data?.data;
    } catch (error) {
      // Handle errors appropriately
      throw error;
    }
  };

  export const deleteSessionApi = async (id) => {
    try {
      // Call your login API endpoint here
      const response = await apis.delete(`users/sessions/${id}`);
      const data = await response;
      // Return data or handle response as needed
      return data?.data;
    } catch (error) {
      // Handle errors appropriately
      throw error;
    }
  };

  

  export const addChatMessageFeedBackAPI = async (payload) => {
    try {
      // Call your login API endpoint here
      const response = await apis.post("users/chatmessage/feedback", payload);
      const data = await response;
      // Return data or handle response as needed
      return data?.data;
    } catch (error) {
      // Handle errors appropriately
      throw error;
    }
  };
  export const getUserSessionChatMgs = async (id) => {
    try {
      // Call your login API endpoint here
      const response = await apis.get(`users/sessions/${id}`);
      const data = await response;
      // Return data or handle response as needed
      return data?.data;
    } catch (error) {
      // Handle errors appropriately
      throw error;
    }
  };

  