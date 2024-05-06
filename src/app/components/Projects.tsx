import { PortfolioData } from "../data/portfolioData.interface.js";

import ImageContainer from "./ImageContainer";

interface ExperienceProps {
  portfolioData: PortfolioData;
}

const Projects: React.FC<ExperienceProps> = ({ portfolioData }) => {
  return (
    <div
      style={{
        margin: "8px",
        marginLeft: "16px",
        maxWidth: "80vw",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
      }}
      className="MyProjects"
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "32px",
          width: "100%",
        }}
      >
        Personal Projects
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2vw",
        }}
      >
        {portfolioData?.personalProjects.map((project, index) => (
          <div
            key={index}
            style={{
              width: "calc(50% - 1vw)",
              marginBottom: "16px",
              background: "#333333",
              padding: "20px",
              borderRadius: "8px",
              boxSizing: "border-box",
            }}
          >
            <ImageContainer project={project} />

            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#ffffff",
              }}
            >
              {project.name}
            </h3>
            <p
              style={{
                color: "#dddddd",
                fontSize: "16px",
                marginBottom: "16px",
                wordBreak: "break-word",
              }}
            >
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
