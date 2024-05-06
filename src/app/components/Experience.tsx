import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { PortfolioData } from "../data/portfolioData.interface.js";

interface ExperienceProps {
  portfolioData: PortfolioData;
}

const Experience: React.FC<ExperienceProps> = ({ portfolioData }) => {
  return (
    <div
      style={{
        margin: "8px",
        marginLeft: "16px",
        maxWidth: "80vw",
        width: "100%",
      }}
      className="Experience"
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "32px",
        }}
      >
        Work Experience
      </h3>
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          lineHeight: "1.2",
          marginBottom: "32px",
          color: "#ffffff",
        }}
      >
        Companies I have worked for in the past.
      </h2>
      {portfolioData?.workExperience.map((exp, index) => (
        <div
          key={exp.title}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "20%",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <h1
              style={{
                color: "lightseagreen",
                border: "4px solid lightseagreen",
                borderRadius: "50%",
                padding: "24px",
                display: "inline-block",
              }}
            >
              {index + 1}
            </h1>
          </div>
          <div
            style={{
              background: "#333333",
              padding: "20px",
              borderRadius: "8px",
              width: "80%",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaBriefcase style={{ marginRight: "8px" }} />
              {exp.title}
            </h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p
                style={{
                  color: "#dddddd",
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              >
                {exp.company}, {exp.location}
              </p>
              <p
                style={{
                  color: "#dddddd",
                  fontSize: "16px",
                  marginBottom: "8px",
                }}
              >
                {exp.dates}
              </p>
            </div>
            <ul style={{ color: "#dddddd", marginLeft: "24px" }}>
              {exp.description.map((desc: string, i: number) => (
                <li key={`${i}-${desc}`} style={{ marginBottom: "4px" }}>
                  {desc}
                </li>
              ))}
            </ul>
            <p
              style={{
                color: "#ffffff",
                fontSize: "16px",
                marginTop: "16px",
                marginBottom: "4px",
              }}
            >
              <strong>Technology Stack:</strong>
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "4px",
              }}
            >
              {exp.technologyStack.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    background: "#ffffff",
                    color: "#333333",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    marginRight: "4px",
                    marginBottom: "4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaCheckCircle
                    style={{
                      marginRight: "8px",
                      color: "#5cb85c",
                      fontSize: "20px",
                    }}
                  />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
