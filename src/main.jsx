import {  Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
// import reportWebVitals from './reportWebVitals.js';
import store from './redux/store';
import { Provider } from 'react-redux';
import Pages from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme/theme.js';

const persistor = persistStore(store);

// const root = document.getElementById("root");

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<div>Loading...</div>}>
    {/* <ThemeProvider theme={theme}> */}
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <ToastContainer />
        <Pages />
      </PersistGate>
    </Provider>
    {/* </ThemeProvider> */}
  </Suspense>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
