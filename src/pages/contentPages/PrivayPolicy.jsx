import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'; // Import CSS for styling
import bibleLogo from '../../assets/bible-logo.png';
import { Typography } from "@mui/material";

const PrivacyPolicy = () => {
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
      <button className="back-button" onClick={() => navigate('/')}>← Back to Home page</button>

      <div className="terms-content">
        <h1>Privacy Policy</h1>

        <div className="term-section">
          <h2>1. Introduction</h2>
          <p>
            At Bible Interpretation AI, we value your privacy. This Privacy Policy explains how we collect,
            use, and protect your personal information when you use our platform.
          </p>
        </div>

        <div className="term-section">
          <h2>2. Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and usage data when you
            register or interact with the platform. We also use cookies to enhance your experience.
          </p>
        </div>

        <div className="term-section">
          <h2>3. How We Use Your Information</h2>
          <p>
            Your information is used to provide personalized Bible insights, improve our services, and
            communicate updates. We do not sell your data to third parties.
          </p>
        </div>

        <div className="term-section">
          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your information from unauthorized
            access or disclosure. However, no data transmission over the internet is completely secure.
          </p>
        </div>

        <div className="term-section">
          <h2>5. Sharing of Information</h2>
          <p>
            We may share your data with trusted third-party service providers who assist in operating our
            platform, as long as they comply with our data protection requirements.
          </p>
        </div>

        <div className="term-section">
          <h2>6. User Rights</h2>
          <p>
            You have the right to access, modify, or delete your personal data. You may also opt-out of
            communications from us at any time.
          </p>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
