import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
