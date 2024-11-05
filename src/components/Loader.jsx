import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loader = ({ open = false, message = "" }) => {
  return (
    <Backdrop
      sx={{
        backdropFilter: "blur(1px)",
        backgroundColor: "rgb(52 52 52 /1%)",
        zIndex: (theme) => theme.zIndex.modal + 1,
      }}
      open={open}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CircularProgress color="#905E5E91" />
        <Typography>{message}</Typography>
      </Box>
    </Backdrop>
  );
};
export default Loader;
