import { url } from "inspector";
import { PortfolioData } from "../data/portfolioData.interface.js";
import Image from "next/image";
import { GiAchievement } from "react-icons/gi";

interface ExperienceProps {
  portfolioData: PortfolioData;
}

const Certifications: React.FC<ExperienceProps> = ({ portfolioData }) => {
  return (
    <div
      style={{
        margin: "8px",
        marginLeft: "16px",
        maxWidth: "80vw",
        width: "100%",
      }}
      className="Certifications"
    >
      {/* <h3
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          marginBottom: "32px",
        }}
      >
        Certifications
      </h3> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",

          marginBottom: "40px",
          flexDirection: "row-reverse",

          background: "#333333",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            marginBottom: "32px",
            alignItems: "center",
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={{ height: "30%" }}>
            <Image
              src="/achievements.png"
              alt="Achievements Image"
              layout={"responsive"}
              width={100}
              height={100}
            />
          </div>
          <h3>Certifications</h3>
        </div>

        <div style={{ display: "flex", justifyContent: "start", width: "50%" }}>
          <Image
            src={"/cert1.JPG"}
            alt="Example Image"
            width={500}
            height={500}
            layout={"responsive"}
            style={{ borderRadius: "10%" }}
            objectFit={"cover"}
          />
        </div>
      </div>
    </div>
  );
};

export default Certifications;
