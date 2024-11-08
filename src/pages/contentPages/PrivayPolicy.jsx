import { useNavigate } from "react-router-dom";
import bibleLogo from "../../assets/img/bible-logo.png";
// import { Typography } from "@mui/material";
import Footer from "../../components/common/footer";
import TextCard from "../../components/common/text-card";
import { MoveLeft } from "lucide-react";
import ContentWrapper from "../../components/common/wrapper";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <ContentWrapper>
      <div className="grid  ">
        <img src={bibleLogo} className="mx-auto pt-11 pb-7 " />

        <div className="lg:flex">
          <button
            className="bg-[#905E5E33] h-fit p-4 mb-5  text-white rounded-lg flex items-center gap-3 "
            onClick={() => navigate("/")}
          >
            <MoveLeft /> Back to Home page
          </button>
          <div className=" p-5 max-h-[600px]  max-w-[900px] space-y-2 rounded-xl bg-white  mx-auto custom-scrollbar">
            <h1 className="text-4xl font-albert-sans py-3 font-bold ">
            Privacy Policy
            </h1>
            <TextCard
              title="1. Acceptance of Terms"
              description=" By accessing or using Bible Interpretation AI, you agree to comply with these Terms and Conditions.
            If you do not agree, please discontinue using the service."
              bgColor="#FFF0F0"
            />
            <TextCard
              title="2. User Responsibilities"
              description="Users must provide accurate information when registering and agree not to use the platform for
            unlawful activities. Any misuse of the site or AI services may result in suspension or termination of access."
              bgColor="#FFF0F0"
            />

            <TextCard
              title="3. AI Responses and Interpretations"
              description="The Bible interpretations provided by AI are intended for guidance and educational purposes.
            While we strive for accuracy, interpretations may not always align with theological standards.
            We recommend consulting additional biblical resources for a complete understanding."
              bgColor="#FFF0F0"
            />
            <TextCard
              title="4. Intellectual Property"
              description="  All content on this site, including text, graphics, logos, and software, is the property of Bible
            Interpretation AI and protected under intellectual property laws. Users may not reproduce,
            distribute, or create derivative works without permission."
              bgColor="#FFF0F0"
            />
            <TextCard
              title="5. Privacy and Data Security"
              description=" We take your privacy seriously. Please review our Privacy Policy to understand how we collect,
            use, and protect your data. By using the platform, you consent to the collection and use of your
            data as outlined."
              bgColor="#FFF0F0"
            />
          </div>
        </div>
        <Footer />
      </div>
    </ContentWrapper>
  );
};

export default PrivacyPolicy;
