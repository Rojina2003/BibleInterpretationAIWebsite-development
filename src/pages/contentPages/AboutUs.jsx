import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import CSS for styling
import bibleLogo from '../../assets/bible-logo.png';
import { Typography } from "@mui/material";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-container">
      <div className="chat_header_main">
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
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home page
      </button>

      <div className="aboutus-content">
        {/* <h1 className="title">About Us</h1> */}

        <div className="section">
          <h2>About Us</h2>
          <p>
            At Bible Interpretation AI, we are committed to bringing the wisdom of scripture to life through innovative technology. Our platform offers users personalized, AI-driven insights into the Bible, designed to make its teachings more accessible and relatable to people from all walks of life. Whether you are looking for guidance, spiritual growth, or deeper understanding, our AI system is here to assist you every step of the way.
          </p>
        </div>

        <div className="section">
          <h2>Our Mission</h2>
          <p>
            We believe that understanding the Word of God is a powerful tool for
            personal and spiritual growth. Our mission is to bridge the gap
            between faith and technology by providing an interactive platform
            that empowers users to explore the Bible in new and meaningful ways.
            With verse-by-verse interpretations, reflections, and answers to
            everyday concerns, we hope to inspire and support your faith
            journey.
          </p>
        </div>

        <div className="section">
          <h2>Why We Built Bible Interpretation AI</h2>
          <p>
            In today’s fast-paced world, many people struggle to find time for
            in-depth Bible study or may feel uncertain about how to interpret
            scripture. We created Bible Interpretation AI to offer quick,
            reliable, and personalized biblical insights that fit into modern
            life. By leveraging artificial intelligence, we aim to make the
            Bible more accessible and help individuals engage with its teachings
            more deeply.
          </p>
        </div>

        <div className="section">
          <h2>How It Works</h2>
          <p>
            Our AI-powered platform uses advanced natural language processing to
            analyze scripture and provide personalized responses to your
            questions. Simply ask about a specific verse, topic, or personal
            situation, and receive insights based on biblical principles.
            Whether you're a student of theology, a preacher, or a curious
            believer, our tool is designed to enhance your understanding of
            God’s Word.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
