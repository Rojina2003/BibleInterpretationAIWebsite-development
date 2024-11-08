/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
// import "./chat.css";
// import {
//   // Box,
//   Typography,
//   IconButton,
//   Dialog,
//   DialogTitle,
//   Button,
//   TextField,
// } from "@mui/material";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import CloseIcon from "@mui/icons-material/Close";
import CommonToast from "../../components/toastContainer";
// import Markdown from "react-markdown";
import { Files,ThumbsUp, ThumbsDown } from 'lucide-react';


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
      <div className="flex flex-col p-5">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-[90%] mx-[10px] p-3 rounded-2xl ${
              msg.type === "question" ? "question" : "answer"
            }`}
            display="flex"
            // alignItems="flex-start"
          >
            {/* Left-side icons for answer messages */}

            {/* Message Text */}
            <div className="flex items-start gap-3 ">
              {msg.type === "answer" ? (
                <img
                  src="src\assets\img\star-red.png"
                  className="  "
                />
              ) : (
                ""
              )}
              <div
                className={
                  msg.type === "answer"
                    ? "message-text"
                    : "message-text-question"
                }
              >
                <p className="answer-content">
                  {/* <FormattedText text={msg.text} /> */}
                  <p>{msg.text}</p>
                </p>
              </div>
            </div>
            {msg.type === "answer" && (
              <div className="answer-icons-section">
                {/* <IconButton size="small">
                    <CommentIcon fontSize="small"  className="answer-icons"/>
                  </IconButton> */}
                {isAuthenticated ? (
                  <>
                    {/* <IconButton
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
                    </IconButton> */}
                     
                  <button
                    className="p-2 0 rounded-full bg-gray-300"
                    onClick={() => {
                      setActionData({
                        ...msg?.metadata,
                        rating: "THUMBS_UP",
                        createdDate: new Date().toISOString(),
                      });
                      setOpenComment(true);
                    }}
                  >
                        <ThumbsUp />

                  </button>
                  <button
                    className="p-2  rounded-full "
                    onClick={() => {
                      setActionData({
                        ...msg?.metadata,
                        rating: "THUMBS_DOWN",
                        createdDate: new Date().toISOString(),
                      });
                      setOpenComment(true);
                    }}
                  >
                     <ThumbsDown />
                  </button>
                </>
                   
                ) : (
                  ""
                )}
                <button  className="p-2 rounded-full " onClick={() => copyToClipboard(msg?.text)}>
                  {/* <ContentCopyIcon
                    fontSize="small"
                   
                  /> */}
                   <Files />
                </button>
              </div>
            )}
          </div>
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
      </div>
      {/* <Dialog open={openComment} onClose={handleClose} maxWidth="sm" fullWidth>
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
      </Dialog> */}
        {openComment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className=" rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Comment</h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-gray-600">✖️</button>
            </div>
            <textarea
              rows="4"
              placeholder="Enter your comment"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={onCommentSave}
              className={`mt-4 w-full py-2 px-4 rounded-lg text-white ${comment ? "bg-red-500 hover:bg-red-600" : "bg-gray-300 cursor-not-allowed"}`}
              disabled={!comment}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatDisplay;