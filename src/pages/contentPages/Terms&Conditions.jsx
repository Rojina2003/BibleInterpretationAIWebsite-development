import React from "react";
import { useNavigate } from "react-router-dom";
import './styles.css'; // Import CSS for styling
import bibleLogo from '../../assets/bible-logo.png';
import { Typography } from "@mui/material";

const TermsAndConditions = () => {
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
        <h1>Terms and Conditions</h1>
        
        <div className="term-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using Bible Interpretation AI, you agree to comply with these Terms and Conditions.
            If you do not agree, please discontinue using the service.
          </p>
        </div>

        <div className="term-section">
          <h2>2. User Responsibilities</h2>
          <p>
            Users must provide accurate information when registering and agree not to use the platform for
            unlawful activities. Any misuse of the site or AI services may result in suspension or termination of access.
          </p>
        </div>

        <div className="term-section">
          <h2>3. AI Responses and Interpretations</h2>
          <p>
            The Bible interpretations provided by AI are intended for guidance and educational purposes.
            While we strive for accuracy, interpretations may not always align with theological standards.
            We recommend consulting additional biblical resources for a complete understanding.
          </p>
        </div>

        <div className="term-section">
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this site, including text, graphics, logos, and software, is the property of Bible
            Interpretation AI and protected under intellectual property laws. Users may not reproduce,
            distribute, or create derivative works without permission.
          </p>
        </div>

        <div className="term-section">
          <h2>5. Privacy and Data Security</h2>
          <p>
            We take your privacy seriously. Please review our Privacy Policy to understand how we collect,
            use, and protect your data. By using the platform, you consent to the collection and use of your
            data as outlined.
          </p>
        </div>
      </div>

      {/* <footer className="terms-footer">
        <span>Powered by Fr. Abraham Mutholathu Foundation</span>
        <nav>
          <a href="/about">About us</a> • 
          <a href="/terms">Terms & Conditions</a> • 
          <a href="/privacy">Privacy policies</a>
        </nav>
        <div className="sign-up">
          <a href="/signup">Sign up</a> to receive email updates
        </div>
      </footer> */}
    </div>
  );
};

export default TermsAndConditions;
