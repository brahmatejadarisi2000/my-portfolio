import React from "react";
import { PortfolioData } from "../data/portfolioData.interface";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

interface ContactProps {
  portfolioData: PortfolioData;
}

const Contact: React.FC<ContactProps> = ({ portfolioData }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "60px",
      }}
      className="Contact"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaEnvelope style={{ marginRight: "8px" }} />
        <p style={{ margin: 0 }}>{portfolioData.personalInfo.email}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaPhone style={{ marginRight: "8px" }} />
        <p style={{ margin: 0 }}>{portfolioData.personalInfo.phone}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaMapMarkerAlt style={{ marginRight: "8px" }} />
        <p style={{ margin: 0 }}>
          {portfolioData.personalInfo.city},{" "}
          {portfolioData.personalInfo.country}
        </p>
      </div>
    </div>
  );
};

export default Contact;
