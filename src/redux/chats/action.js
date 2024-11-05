import { addSession, getUserSessionChatMgs } from "../../apis/services/chatApi";
import CommonToast from "../../components/toastContainer";

// actions.js
export const ActionTypes = {
  ADD_MESSAGE: "ADD_MESSAGE",
  APPEND_TO_LAST_MESSAGE: "APPEND_TO_LAST_MESSAGE",
  SET_PREV_CHAT_ID: "SET_PREV_CHAT_ID",
  LIST_CHAT_MESSAGES_PENDING: "LIST_CHAT_MESSAGES_PENDING",
  LIST_CHAT_MESSAGES_SUCCESS: "LIST_CHAT_MESSAGES_SUCCESS",
  LIST_CHAT_MESSAGES_ERROR: "LIST_CHAT_MESSAGES_ERROR",
  SET_NEW_SESSION: "SET_NEW_SESSION",
  CLEAR_MESSAGES: "CLEAR_MESSAGES",
};
export const addMessage = (message) => ({
  type: ActionTypes?.ADD_MESSAGE,
  payload: message,
});

export const appendToLastMessage = (text, metadata = null) => ({
  type: ActionTypes?.APPEND_TO_LAST_MESSAGE,
  payload: { text, metadata },
});

export const setChatId = (chatId) => ({
  type: ActionTypes.SET_PREV_CHAT_ID,
  payload: chatId,
});

export const clearMessageWhenLogin = () => ({
  type: ActionTypes.CLEAR_MESSAGES,
  payload: "",
});

export const setNewSession = (sessionTitle) => ({
  type: ActionTypes.SET_NEW_SESSION,
  payload: sessionTitle,
});

export const listChatMessages = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.LIST_CHAT_MESSAGES_PENDING });
    getUserSessionChatMgs(id)
      .then((response) => {
        const data = response.data.map((msgs) => {
          return {
            type: msgs?.role === "userMessage" ? "question" : "answer",
            text: msgs.content,
            metadata:
              msgs?.role === "userMessage"
                ? null
                : {
                    sessionId: msgs?.sessionId,
                    chatId: msgs?.chatId,
                    messageId: msgs?.id,
                  },
          };
        });
        dispatch({
          type: ActionTypes.LIST_CHAT_MESSAGES_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error("Error fetching chat messages:", error);
        CommonToast.notify(
          "error",
          error?.response?.data?.message || "Failed to load chat messages"
        );
        dispatch({
          type: ActionTypes.LIST_CHAT_MESSAGES_ERROR,
          payload: error?.response?.data?.message,
        });
      });
  };
};
