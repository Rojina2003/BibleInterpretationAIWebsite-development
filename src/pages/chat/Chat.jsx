/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import ContentWrapper from "../../components/common/wrapper";

// import {
//   Box,
//   Button,
//   // Card,
//   // CardContent,
//   // Grid,
//   Link,
//   TextField,
//   Typography,
//   // IconButton,
// } from "@mui/material";
// import AttachFileIcon from "@mui/icons-material/AttachFile";
// import MicIcon from "@mui/icons-material/Mic";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { FlowiseClient } from "flowise-sdk";
import { Mic, Paperclip } from "lucide-react";
import ChatDisplay from "./Messages";
import {
  addMessage,
  appendToLastMessage,
  listChatMessages,
  setChatId,
  clearMessageWhenLogin,
} from "../../redux/chats/action";
import { AssemblyAI } from "assemblyai";
// import { MicOff } from "@mui/icons-material";
import SideBar from "../../components/sidebar/SideBar";
// import Loader from "../../components/Loader";
// import { addChatMessageFeedBackAPI } from "../../apis/services/chatApi";
import AddTitleModal from "../../components/Dialog/AddTitleModal";
import { setSessionId } from "../../redux/auth/actions";
import CommonToast from "../../components/toastContainer";
import bibleLogo from "../../assets/bible-logo.png";
import useWindowSize from "../../hooks/useWindowSize";
import Footer from "../../components/common/footer";
import { useNavigate } from "react-router-dom";
const validationSchema = yup.object({
  question: yup
    .string()
    .min(1, "Question must be at least 5 characters long")
    .required("This field is required"),
});
const mimeType = "audio/webm";

function App() {
  const navigate = useNavigate();
  const { isAuthenticated, sessionId } = useSelector((state) => state.auth);
  //userSessions,
  const { messages, chatMessagesLoading, sessionTitle } = useSelector(
    (state) => state.streaming
  );
  const dispatch = useDispatch();
  const [width] = useWindowSize();
  // const sessionId = useSelector((state) => state.streaming.sessionId);
  const [loading, setLoading] = useState(false);
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  // const mediaRecorderRef = useRef(null);
  const bottomRef = useRef(null);
  const [, setPermission] = useState(false);
  const [stream, setStream] = useState(null);
  const mediaRecorder = useRef(null);
  const [, setAudio] = useState(null);
  const location = useLocation();
  const [openTitleModal, setOpenTitleModal] = useState(false);
  const [newSessionTitle, setNewSessionTitle] = useState("");

  console.log("width", width);

  const cardData = [
    {
      key: 1,
      subTitle:
        " Dive into scripture with AI-powered verse-by-verse insights, guiding you to a deeper understanding and growth in faith.",
    },
    {
      key: 2,
      subTitle:
        "Unlock the meaning of scripture with AI-driven verse-by-verse interpretations, your trusted companion for spiritual growth.",
    },
    {
      key: 3,
      subTitle:
        "Experience scripture in a new way with AI-guided interpretations, designed to deepen your understanding & enrich your faith journey.",
    },
    {
      key: 4,

      subTitle:
        "Enhance your spiritual journey with AI-powered verse-by-verse interpretations, offering personalized guidance to strengthen your faith.",
    },
    {
      key: 5,
      subTitle:
        "Let AI be your guide in exploring scripture, providing detailed verse-by-verse interpretations to deepen your connection with your faith.",
    },
    // {
    //   key: 6,
    //   title: "Bible Question: Seek answers for Biblical doubts.",
    //   subTitle:
    //     "Why Jesus cursed a fig tree, causing it to wither later. Is there any valid explanation for it?",
    // },
  ];

  useEffect(() => {
    dispatch(clearMessageWhenLogin);
  }, [dispatch]);

  useEffect(() => {
    if (location?.pathname.includes("/c/:")) {
      const id = location?.pathname?.replace("/c/:", "");
      dispatch(listChatMessages(id));
    }
  }, [dispatch, location?.pathname]);
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
          const sessionId = isAuthenticated ? newSessionId : null;
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
      // const response = await addChatMessageFeedBackAPI(data);
      CommonToast.notify("success", "Feedback added successfully");
    } catch (err) {
      CommonToast.notify(
        "error",
        err?.response?.data?.error || "Failed to add Feedback"
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
      if (!isAuthenticated) {
        navigate("/login");
      } else if (!messages.length && !newSessionTitle && !sessionTitle) {
        setOpenTitleModal(true);
      }
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
      // process.exit(1);
      setLoading(false);
    }
    setLoading(false);
    formik.setFieldValue("question", transcript.text);
    console.log(transcript.text);
  };

  return (
    <ContentWrapper>
      {/* */}
      {/* {messages.length > 0 && (
        <div>
          <div>
            // 
          </div>
        </div>
      )} */}
      {/* <SideBar> */}
      {/* Main Content */}
      {/* <div className=""> */}
      <div className="pt-5 text-white ">
        {messages.length === 0 ? (
          <>
            <img src={bibleLogo} className="mx-auto py-3 " />
            <div className="max-w-[1000px] max-h-[450px] custom-scrollbar mx-auto ">
              <ChatDisplay
                loader={loading || chatMessagesLoading}
                onApplyFeedback={onApplyFeedback}
                isAuthenticated={isAuthenticated}
              />
              <div ref={bottomRef}></div>
            </div>
          </>
        ) : (
          <>
            <div className="text-white font-albert-sans max-w-[580px] mx-auto text-center  ">
              <img src={bibleLogo} className="w-fit pb-7 mx-auto" />
              <h1 className="text-[#FFF6F6] text-4xl font-bold max-w-[550px] ">
                Uncover Divine Wisdom with AI-Powered Bible Insights
              </h1>
              <h3 className="py-4  text-lg text-[#EA9DA1] ">
                Explore and understand scripture with AI-driven verse-by-verse
                interpretations. Your personal guide to deepening your faith.
              </h3>
            </div>

            <div className="text-white mx-auto max-w-[950px] justify-center mb-5 text-center  flex flex-wrap gap-4">
              {cardData.map((data) => (
                // eslint-disable-next-line react/jsx-key
                <div className=" max-w-[300px]  rounded-lg ">
                  <p
                    className="text-sm  h-[120px] flex items-center px-3 text-center text-[#FFD9DB]"
                    style={{
                      backgroundImage: "url('src/assets/img/image.png')",
                      backgroundRepeat: "no-repeat",
                    }}
                  >
                    {data?.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      mt={messages.length > 0 ? 0 : 10}
      <form
        onSubmit={formik.handleSubmit}
        className=" max-w-[950px] mx-auto relative flex"
      >
        {/* <div className={messages.length ? "invisible-div" : ""} /> */}
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
        <input
          type="text"
          placeholder="Share your question or explain your concern..."
          disabled={loading}
          className="textbox-input w-full rounded-xl h-[60px] p-2 border-b-2 border-gray-300 focus:border-blue-500"
          name="question"
          value={formik.values.question}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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

        <div className="absolute flex items-center gap-3 top-2 right-5 ">
          <Paperclip className="text-[#CA0E18] p-2 h-10 w-10 bg-[#FFDFE0] rounded-full " />
          <Mic className="text-[#CA0E18] p-2 h-10 w-10 bg-[#FFDFE0] rounded-full  " />
          <button
            type="submit"
            disabled={loading || chatMessagesLoading}
            className="  flex items-center h-[45px] bg-[#CA0E18] text-white px-4 py-2 rounded-md "
          >
            <img
              src="/assets/images/generate-btn-icon.png"
              className="generate-icon mr-2"
            />
            Generate
          </button>
        </div>
      </form>
      <p className="text-white text-center font-albert-sans text-lg font-medium py-3 ">
        <Link className="underline underline-offset-4" to="/sign-up">
          Sign up
        </Link>{" "}
        <span className="text-[#8F8F8F] ">to receive email updates</span>
      </p>
      {/* </div> */}
      {/* Footer */}
      {/* </SideBar> */}
      <AddTitleModal
        openTitleModal={openTitleModal}
        handleClose={handleCloseTitleModal}
        handleSubmit={handleTitleSubmit}
        setSessionTitle={setNewSessionTitle}
        sessionTitle={newSessionTitle}
      />
      {/* {loading ? <Loader open={loading} message="" /> : ""} */}
      <Footer />
    </ContentWrapper>
  );
}

export default App;
