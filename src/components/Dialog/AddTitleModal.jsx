/* eslint-disable react/prop-types */
import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";

export default function AddTitleModal({
  openTitleModal,
  handleClose,
  handleSubmit,
  sessionTitle,
  setSessionTitle,
}) {
  return (
    <div>
      <Dialog
        open={openTitleModal}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers sx={{ padding: "16px" }}>
          <TextField
            multiline
            rows={1}
            placeholder="Enter Title"
            variant="outlined"
            value={sessionTitle}
            fullWidth
            onChange={(e) => setSessionTitle(e?.target?.value)}
            sx={{
              backgroundColor: "#F5F5F5",
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
              },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ padding: "16px" }}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            // fullWidth
            sx={{
              backgroundColor: "#D32F2F",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#B71C1C",
              },
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
