// rootReducer.js
import { combineReducers } from "redux";
import { auth } from "./auth/reducer";
import streaming from "./chats/reducer";


const appReducer = combineReducers({
  auth: auth,
  streaming

});

const rootReducer = (state, action) => {
  if (action.type === "CLEAR_STORE") return appReducer(undefined, action);
  else return appReducer(state, action);
};

export default rootReducer;
