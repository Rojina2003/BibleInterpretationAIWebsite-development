import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import { Box, CircularProgress } from "@mui/material";

const Pages = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route >
          {PublicRoutes.map((route, index) => (
            <Route
              key={route.path}
              exact
              path={route.path}
              element={
                <Suspense
                  fallback={
                    <div
                      style={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress />
                    </div>
                  }
                >
                  <route.element />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
};

export default Pages;
