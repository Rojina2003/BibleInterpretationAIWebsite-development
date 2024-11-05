// reducer.js
import { ActionTypes } from "./action";

const initialState = {
  messages: [], // Store questions and answers as objects in an array
  chatIds: [],
  chatMessagesLoading: false,
  sessionTitle: "",
};

const streaming = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes?.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case ActionTypes.APPEND_TO_LAST_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message, index) => {
          // Check if it's the last message and of type "answer"
          if (
            index === state.messages.length - 1 &&
            message.type === "answer"
          ) {
            return {
              ...message,
              text: message.text + action.payload.text,
              metadata: {
                ...message.metadata,
                ...(action.payload.metadata || {}),
              },
            };
          }
          return message;
        }),
      };
    case ActionTypes.LIST_CHAT_MESSAGES_PENDING:
      return {
        ...state,
        chatMessagesLoading: true,
        error: null,
      };

    case ActionTypes.LIST_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        chatMessagesLoading: false,
        messages: action.payload,
      };

    case ActionTypes.LIST_CHAT_MESSAGES_ERROR:
      return {
        ...state,
        chatMessagesLoading: false,
        error: action.payload,
      };
    case ActionTypes.SET_NEW_SESSION:
      return {
        ...state,
        chatMessagesLoading: false,
        sessionTitle: action.payload,
        messages: [],
      };
    case ActionTypes.CLEAR_MESSAGES:
      return {
        ...state,
        chatMessagesLoading: false,
        messages: [],
      };

    case ActionTypes.SET_PREV_CHAT_ID:
      return {
        ...state,
        chatIds: action.payload,
      };
    default:
      return state;
  }
};

export default streaming;
