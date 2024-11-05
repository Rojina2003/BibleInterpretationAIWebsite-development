import { useSelector } from "react-redux";
import "./chat.css";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  Button,
  TextField,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import CommonToast from "../../components/toastContainer";
import Markdown from "react-markdown";

const ChatDisplay = ({ loader, onApplyFeedback, isAuthenticated }) => {
  const messages = useSelector((state) => state.streaming.messages);
  const [openComment, setOpenComment] = useState(false);
  const [comment, setComment] = useState("");
  const [actionData, setActionData] = useState("");

  const handleClose = () => {
    setOpenComment(false);
  };

  const onCommentSave = async () => {
    await onApplyFeedback({
      ...actionData,
      content: comment,
    });
    await setOpenComment(false);
    await setComment("");
  };

  const copyToClipboard = (data) => {
    navigator.clipboard.writeText(data).then(
      () => {
        CommonToast.notify("success", "Copied!");
      },
      (err) => {
        CommonToast.notify("error", "Failed to copy!");
      }
    );
  };

  return (
    <div>
      <Box className="chat-container">
        {messages.map((msg, index) => (
          <Box
            key={index}
            className={`message ${
              msg.type === "question" ? "question" : "answer"
            }`}
            display="flex"
            alignItems="flex-start"
          >
            {/* Left-side icons for answer messages */}

            {/* Message Text */}
            <div className="d-flex">
              {msg.type === "answer" ? (
                <img
                  src="/assets/images/star-red.svg"
                  className="star-red-icon"
                />
              ) : (
                ""
              )}
              <Box
                className={
                  msg.type === "answer"
                    ? "message-text"
                    : "message-text-question"
                }
              >
                <Typography className="answer-content">
                  {/* <FormattedText text={msg.text} /> */}
                  <Markdown>{msg.text}</Markdown>
                </Typography>
              </Box>
            </div>
            {msg.type === "answer" && (
              <Box className="answer-icons-section">
                {/* <IconButton size="small">
                    <CommentIcon fontSize="small"  className="answer-icons"/>
                  </IconButton> */}
                {isAuthenticated ? (
                  <>
                    <IconButton
                      size="small"
                      className="answer-icons"
                      onClick={() => {
                        setActionData({
                          ...msg?.metadata,
                          rating: "THUMBS_UP",
                          createdDate: new Date().toISOString(),
                        });
                        setOpenComment(true);
                      }}
                    >
                      <ThumbUpIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      size="small"
                      className="answer-icons"
                      onClick={() => {
                        setActionData({
                          ...msg?.metadata,
                          rating: "THUMBS_DOWN",
                          createdDate: new Date().toISOString(),
                        });
                        setOpenComment(true);
                      }}
                    >
                      <ThumbDownIcon fontSize="small" />
                    </IconButton>
                  </>
                ) : (
                  ""
                )}
                <IconButton size="small" className="answer-icons">
                  <ContentCopyIcon
                    fontSize="small"
                    onClick={() => copyToClipboard(msg?.text)}
                  />
                </IconButton>
              </Box>
            )}
          </Box>
        ))}

        {/* {loader && (
          <Backdrop
            sx={{
              backdropFilter: "blur(1px)",
              backgroundColor: "rgb(52 52 52 /1%)",
              zIndex: (theme) => theme.zIndex.modal + 1,
            }}
            open={loader}
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
            </Box>
          </Backdrop>
        )} */}
      </Box>
      <Dialog open={openComment} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Typography variant="h6">Comment</Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ color: "grey.500" }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ padding: "16px" }}>
          <TextField
            multiline
            rows={4}
            placeholder="Enter your comment"
            variant="outlined"
            fullWidth
            value={comment}
            onChange={(e) => setComment(e?.target?.value)}
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
            onClick={onCommentSave}
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#D32F2F",
              color: "#FFFFFF",
              "&:hover": {
                backgroundColor: "#B71C1C",
              },
            }}
            disabled={!comment}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ChatDisplay;
