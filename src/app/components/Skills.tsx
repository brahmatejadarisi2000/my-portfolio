import React from "react";
import { PortfolioData } from "../data/portfolioData.interface";
import { FaCheckCircle } from "react-icons/fa";

interface PortfolioProps {
  portfolioData: PortfolioData;
}

const Skills: React.FC<PortfolioProps> = ({ portfolioData }) => {
  return (
    <div
      style={{
        margin: "8px",
        marginLeft: "16px",
        maxWidth: "80vw",
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginBottom: "32px",
      }}
    >
      <div style={{ width: "20%" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "32px",
          }}
        >
          Skills
        </h3>
      </div>
      <div style={{ maxWidth: "80%", display: "flex", flexWrap: "wrap" }}>
        {portfolioData.skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "16px",
              marginBottom: "8px",
              padding: "8px 12px",
              backgroundColor: "#f0f0f0",
              borderRadius: "4px",
              fontSize: "18px",
              color: "#555",
            }}
          >
            <FaCheckCircle
              style={{
                marginRight: "8px",
                color: "#5cb85c",
                fontSize: "20px",
              }}
            />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
