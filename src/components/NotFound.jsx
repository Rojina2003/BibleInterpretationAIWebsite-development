import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const NotFoundContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "90vh",
  textAlign: "center",
  backgroundColor: "#f8f8f8",
  padding: "20px",
});

const NotFoundImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  marginBottom: "20px",
});

const GoBackButton = styled(Button)({
  marginTop: "20px",
});

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <NotFoundImage src="/assets/images/pageNotFound.svg" alt="Not Found" />
      <Typography variant="h4" component="h1" gutterBottom>
        Page Not Found
      </Typography>
      <Typography variant="body1">
        Sorry, the page you are looking for does not exist.
      </Typography>
      <GoBackButton
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
      >
        Go Back
      </GoBackButton>
    </NotFoundContainer>
  );
}
