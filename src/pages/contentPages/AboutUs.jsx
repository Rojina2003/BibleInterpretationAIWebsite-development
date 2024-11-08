// import React from "react";
import { useNavigate } from "react-router-dom";
// import "./styles.css"; // Import CSS for styling
import bibleLogo from "../../assets/img/bible-logo.png";
// import { Typography } from "@mui/material";
import ContentWrapper from "../../components/common/wrapper";
import TextCard from "../../components/common/text-card";
import { MoveLeft } from 'lucide-react';
import Footer from "../../components/common/footer";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper>
      <div className="" >
        <img src={bibleLogo} className="mx-auto pt-11 pb-7 " />

        <div className="lg:flex block">
          <button className="bg-[#905E5E33] h-fit mb-4 p-4 text-white rounded-lg flex items-center gap-3 " onClick={() => navigate("/")}>
          <MoveLeft /> Back to Home page
          </button>
          <div className=" max-h-[600px] px-5 py-3 max-w-[900px] rounded-xl bg-white  mx-auto custom-scrollbar">
            <TextCard
              title="About Us"
              description="At Bible Interpretation AI, we are committed to bringing the
              wisdom of scripture to life through innovative technology. Our
              platform offers users personalized, AI-driven insights into the
              Bible, designed to make its teachings more accessible and
              relatable to people from all walks of life. Whether you are
              looking for guidance, spiritual growth, or deeper understanding,
              our AI system is here to assist you every step of the way."
            />
            <TextCard
              title="Our Mission"
              description="We believe that understanding the Word of God is a powerful tool
              for personal and spiritual growth. Our mission is to bridge the
              gap between faith and technology by providing an interactive
              platform that empowers users to explore the Bible in new and
              meaningful ways. With verse-by-verse interpretations, reflections,
              and answers to everyday concerns, we hope to inspire and support
              your faith journey."
            />

            <TextCard
              title="Why We Built Bible Interpretation AI"
              description="In today’s fast-paced world, many people struggle to find time for
              in-depth Bible study or may feel uncertain about how to interpret
              scripture. We created Bible Interpretation AI to offer quick,
              reliable, and personalized biblical insights that fit into modern
              life. By leveraging artificial intelligence, we aim to make the
              Bible more accessible and help individuals engage with its
              teachings more deeply."
            />
            <TextCard
              title="How It Works"
              description="Our AI-powered platform uses advanced natural language processing
              to analyze scripture and provide personalized responses to your
              questions. Simply ask about a specific verse, topic, or personal
              situation, and receive insights based on biblical principles.
              Whether you're a student of theology, a preacher, or a curious
              believer, our tool is designed to enhance your understanding of
              God’s Word."
            />
          </div>
        </div>
        <Footer/>
      </div>
    </ContentWrapper>
  );
};

export default AboutUs;
