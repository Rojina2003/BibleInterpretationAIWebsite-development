import { useEffect, useRef, useState } from "react";
import "./chat.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MicIcon from "@mui/icons-material/Mic";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FlowiseClient } from "flowise-sdk";
import ChatDisplay from "./Messages";
import {
  addMessage,
  appendToLastMessage,
  listChatMessages,
  setChatId,
} from "../../redux/chats/action";
import { AssemblyAI } from "assemblyai";
import { MicOff } from "@mui/icons-material";
import SideBar from "../../components/sidebar/SideBar";
import Loader from "../../components/Loader";
import { addChatMessageFeedBackAPI } from "../../apis/services/chatApi";
import AddTitleModal from "../../components/Dialog/AddTitleModal";
import { setSessionId } from "../../redux/auth/actions";
import CommonToast from "../../components/toastContainer";
import bibleLogo from "../../assets/bible-logo.png";
import useWindowSize from "../../hooks/useWindowSize";

const validationSchema = yup.object({
  question: yup
    .string()
    .min(1, "Question must be at least 5 characters long")
    .required("This field is required"),
});
const mimeType = "audio/webm";

function App() {
  const navigate = useNavigate();
  const { isAuthenticated, userSessions, sessionId } = useSelector(
    (state) => state.auth
  );

  const { messages, chatMessagesLoading, sessionTitle } = useSelector(
    (state) => state.streaming
  );
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  // const sessionId = useSelector((state) => state.streaming.sessionId);
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const mediaRecorderRef = useRef(null);
  const bottomRef = useRef(null);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const mediaRecorder = useRef(null);
  const [audio, setAudio] = useState(null);
  const location = useLocation();
  const [openTitleModal, setOpenTitleModal] = useState(false);
  const [newSessionTitle, setNewSessionTitle] = useState("");

  console.log("width", width);

  const cardData = [
    {
      key: 1,
      title: "Family: Identify yourself and your specific need",
      subTitle:
        "How can the Bible help me improve communication and promote unity in my struggling family?",
    },
    {
      key: 2,
      title: "Children: Faith formation by parents",
      subTitle:
        "How can I use biblical examples to help my children understand the significance of faith and prayer?",
    },
    {
      key: 3,
      title:
        "Catechism Teachers: Aids like role-playing, assignments, and games..",
      subTitle:
        "Prepare a quiz comprising ten questions about the Ten Commandments for my fifth-grade students?",
    },
    {
      key: 4,
      title: "Pastor: Help with sermon, wedding homily, eulogy.",
      subTitle:
        "I need a  message for parish bulletin, highlighting the importance of daily Bible reading.",
    },
    {
      key: 5,
      title: "Bible Interpretation: Verse by verse commentary",
      subTitle:
        "Could you provide a thorough analysis of Matthew 5:1-12 and its relevance in contemporary society?",
    },
    {
      key: 6,
      title: "Bible Question: Seek answers for Biblical doubts.",
      subTitle:
        "Why Jesus cursed a fig tree, causing it to wither later. Is there any valid explanation for it?",
    },
  ];

  useEffect(() => {
    if (location?.pathname.includes("/c/:")) {
      const id = location?.pathname?.replace("/c/:", "");
      dispatch(listChatMessages(id));
    }
  }, [location?.pathname]);
  useEffect(() => {
    if (bottomRef.current) {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

  const test_streaming = async ({ question }) => {
    setLoading(true); // Start loading

    const client = new FlowiseClient({
      baseUrl: "https://bibleai.bibleinterpretation.ai",
      apiKey: "Bearer FteYoPLRG0xNS1AEntK-Xmj-m_kIr2Pltu0MTXCw-9o",
    });

    try {
      dispatch(addMessage({ type: "question", text: question }));
      dispatch(addMessage({ type: "answer", text: "" }));

      const prediction = await client.createPrediction({
        chatflowId: "a0be17e7-7066-4c8f-9cad-37bc921cbb07",
        question: question,
        streaming: true,
        sessionId: sessionId,
        overrideConfig: {
          sessionId: sessionId,
        },
        // chatId: "62b4aabd-9eee-4761-9f00-5635b31a5993",
      });

      for await (const chunk of prediction) {
        setLoading(false);
        if (chunk?.event === "token") {
          dispatch(appendToLastMessage(chunk.data, null));
        } else if (chunk?.event === "metadata") {
          console.log("meta", chunk);
          const {
            sessionId: newSessionId,
            chatId: newChatId,
            chatMessageId: messageId,
          } = chunk.data;
          // const sessionId = isAuthenticated ? newSessionId : null;
          if (!sessionId) {
            dispatch(
              setSessionId(
                {
                  sessionId: newSessionId,
                  title: newSessionTitle || sessionTitle,
                },
                isAuthenticated
              )
            );
            dispatch(setChatId([newChatId]));
          } else if (sessionId === newSessionId) {
            dispatch(setChatId((prevChatIds) => [...prevChatIds, newChatId]));
          }
          dispatch(
            appendToLastMessage("", {
              sessionId: newSessionId,
              chatId: newChatId,
              messageId: messageId,
            })
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading once the response is received
      setNewSessionTitle("");
    }
  };

  const onApplyFeedback = async (data) => {
    data["chatflowid"] = "a0be17e7-7066-4c8f-9cad-37bc921cbb07";
    // data["content"] = "test data";
    // try {
    //   const response = await fetch(
    //     "https://bibleai.bibleinterpretation.ai/api/feedback",
    //     {
    //       headers: {
    //         Authorization: "Bearer FteYoPLRG0xNS1AEntK-Xmj-m_kIr2Pltu0MTXCw-9o",
    //         "Content-Type": "application/json",
    //       },
    //       // mode: 'no-cors',
    //       method: "POST",
    //       body: JSON.stringify(data),
    //     }
    //   );
    //   const result = await response.json();
    //   console.log("ress", result);
    // } catch (err) {
    // }

    try {
      const response = await addChatMessageFeedBackAPI(data);
      CommonToast.notify("success", "Feedback added successfully");
    } catch (err) {
      CommonToast.notify(
        "error",
        error?.response?.data?.error || "Failed to add Feedback"
      );
    }
  };

  const testStreaming = async (data) => {
    const response = await fetch(
      "https://bibleai.bibleinterpretation.ai/api/v1/prediction/a0be17e7-7066-4c8f-9cad-37bc921cbb07",
      {
        headers: {
          Authorization: "Bearer FteYoPLRG0xNS1AEntK-Xmj-m_kIr2Pltu0MTXCw-9o",
          "Content-Type": "application/json",
        },
        // mode: 'no-cors',
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    return result;
  };

  const handleCloseTitleModal = () => {
    setOpenTitleModal(false);
  };

  const handleTitleSubmit = () => {
    setOpenTitleModal(false);
  };

  const formik = useFormik({
    initialValues: {
      question: "", // Input for the text box
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // if (!isAuthenticated) {
      //   navigate("/login");
      // } else if (!messages.length && !newSessionTitle && !sessionTitle) {
      //   setOpenTitleModal(true);
      // }
      if (
        !messages.length &&
        !newSessionTitle &&
        !sessionTitle &&
        !sessionId &&
        isAuthenticated
      ) {
        setOpenTitleModal(true);
      } else {
        test_streaming({ question: values?.question });
        formik.resetForm(); // Clear the input field after submit
      }
    },
  });

  const startRecording = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      setStream(mediaStream);
      setPermission(true);
      const media = new MediaRecorder(mediaStream, { mimeType });
      mediaRecorder.current = media;
      setAudioChunks([]); // Reset audio chunks before each recording
      setRecording(true);

      media.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
        }
      };
      media.start();
    } catch (error) {
      console.error("Failed to get audio permission:", error);
    }
  };

  const stopRecording = async () => {
    if (mediaRecorder.current && recording) {
      mediaRecorder.current.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prev) => [...prev, event.data]);
          const audioBlob = new Blob([audioChunks, event?.data], {
            type: mimeType,
          });
          if (audioBlob.size > 0) {
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudio(audioUrl);
            await handleVoiceToText(audioBlob);
          }
          setRecording(false);
        }
      };

      mediaRecorder.current.onstop;
      mediaRecorder.current.requestData(); // Request any remaining data
      mediaRecorder.current.stop();
      setRecording(false);
      stream?.getTracks().forEach((track) => track.stop()); // Stop the stream
      setStream(null);
    }
  };

  const handleVoiceToText = async (audio) => {
    setLoading(true);
    const client = new AssemblyAI({
      apiKey: "cb296cd14f4544e5a84ab82c28e365d5",
    });
    const params = {
      audio: audio,
    };
    const transcript = await client.transcripts.transcribe(params);
    if (transcript.status === "error") {
      console.error(`Transcription failed: ${transcript.error}`);
      process.exit(1);
      setLoading(false);
    }
    setLoading(false);
    formik.setFieldValue("question", transcript.text);
    console.log(transcript.text);
  };

  return (
    <>
      {" "}
      {messages.length > 0 && (
        <div className="invisible-top">
          <div>
            <img
              src={bibleLogo}
              className="logo-img"
              alt="Bible Logo"
              height={41}
              width={41}
            />
            <Typography
              variant="h5"
              color="#FFF6F6;
"
            >
              Bible Interpretation AI
            </Typography>
          </div>
        </div>
      )}
      <SideBar>
        {/* Main Content */}
        <Box className="main-content">
          {messages.length > 0 ? (
            <Box className="chat-box">
              <ChatDisplay
                loader={loading || chatMessagesLoading}
                onApplyFeedback={onApplyFeedback}
                isAuthenticated={isAuthenticated}
              />
              <div ref={bottomRef}></div>
            </Box>
          ) : (
            <div id="content" className="details-section">
              <img
                src={bibleLogo}
                className="logo-img"
                alt="Bible Logo"
                height={117}
                width={117}
              />
              <Typography
                variant="h5"
                color="#FFF6F6;
"
              >
                Bible Interpretation AI
              </Typography>
              <Box textAlign="center" my={4}>
                <Typography
                  className="details-typography"
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontSize: "42px",
                    fontWeight: "700",
                    maxWidth: "600px",
                    margin: "auto",
                    fontFamily: "Albert Sans",
                  }}
                >
                  Uncover Divine Wisdom with AI-Powered Bible Insights
                </Typography>
                <Typography
                  className="details-typography-sub"
                  variant="subtitle1"
                  sx={{
                    color: "#EA9DA1",
                    maxWidth: "660px",
                    margin: "auto",
                  }}
                >
                  Explore and understand scripture with AI-driven verse-by-verse
                  interpretations. Your personal guide to deepening your faith.
                </Typography>
              </Box>

              {/* Two Cards Section */}
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="stretch"
              >
                {cardData.map((data) => (
                  <Grid item xs={12} md={4} key={data?.key}>
                    <Card className="card-style">
                      <CardContent sx={{ flexGrow: 1, padding: "10px" }}>
                        <Typography variant="body1" color="#FFD9DB">
                          {data?.title}
                        </Typography>
                        <Typography variant="body2" color="#EA9DA1">
                          {data?.subTitle}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
          <Box className="textbox-container" mt={messages.length > 0 ? 0 : 10}>
            <form onSubmit={formik.handleSubmit} className="w-100">
              <div className={messages.length ? "invisible-div" : ""} />
              <Box className="textbox-box">
                {/* Input Field */}
                {/* <textarea
                  placeholder="Share your question or explain your concern..."
                  disabled={loading}
                  className="textarea-input"
                  name="question"
                  value={formik.values.question}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // Mark field as touched
                /> */}
                <TextField
                  variant="standard"
                  placeholder="Share your question or explain your concern..."
                  InputProps={{
                    disableUnderline: true, // Remove the default underline
                  }}
                  disabled={loading}
                  className="textbox-input"
                  fullWidth
                  name="question"
                  value={formik.values.question}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur} // Mark field as touched
                  // error={
                  //   formik.touched.question && Boolean(formik.errors.question)
                  // }
                  // helperText={formik.touched.question && formik.errors.question}
                />
                {/* Record Icon */}
                {/* {recording ? (
                  <IconButton
                    className="icon-button"
                    onClick={() => {
                      stopRecording();
                    }}
                    color={"success"} // Color change on recording
                  >
                    <MicOff style={{ color: recording ? "red" : "inherit" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    className="icon-button"
                    onClick={() => {
                      startRecording();
                    }}
                    color={recording ? "secondary" : "default"} // Color change on recording
                  >
                    <MicIcon style={{ color: recording ? "red" : "inherit" }} />
                  </IconButton>
                )} */}

                {/* Generate Button */}
                <Button
                  variant="contained"
                  startIcon={
                    <img
                      src="/assets/images/generate-btn-icon.png"
                      className="generate-icon"
                    />
                  }
                  className="generate-button"
                  disabled={loading || chatMessagesLoading}
                  type="submit"
                >
                  Generate
                </Button>
              </Box>
            </form>
          </Box>
          <Typography className="signup-text" display="inline" mt={3}>
            <span>
              <Link noWrap className="signup-link" href="/sign-up">
                Sign up
              </Link>
              &nbsp; or &nbsp;
              <Link noWrap className="signup-link" href="/login">
                Sign in
              </Link>
              &nbsp; to save your chat history and to receive email updates.
            </span>
          </Typography>
        </Box>
        {/* Footer */}
      </SideBar>
      <AddTitleModal
        openTitleModal={openTitleModal}
        handleClose={handleCloseTitleModal}
        handleSubmit={handleTitleSubmit}
        setSessionTitle={setNewSessionTitle}
        sessionTitle={newSessionTitle}
      />
      {/* {loading ? <Loader open={loading} message="" /> : ""} */}
    </>
  );
}

export default App;
