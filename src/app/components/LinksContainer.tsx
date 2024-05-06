import { FaLinkedin, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";
import styles from "./LinksContainer.module.css";

const LinksContainer = () => {
  return (
    <div className={styles.container}>
      <a
        href="https://www.linkedin.com/in/teja-darisi-68974317a"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaLinkedin
            size={32}
            style={{ marginRight: "5px", verticalAlign: "middle" }}
          />
          <span style={{ fontSize: "16px" }}>Linkedin</span>
        </div>
      </a>
      <a
        href="https://github.com/brahmatejadarisi2000"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.link}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaGithub
            size={32}
            style={{ marginRight: "5px", verticalAlign: "middle" }}
          />
          <span style={{ fontSize: "16px" }}>Github</span>
        </div>
      </a>

      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=brahmateja.darisi@gmail.com"
        aria-label="navigate to gmail"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaEnvelope
            size={32}
            style={{ marginRight: "5px", verticalAlign: "middle" }}
          />
          <span style={{ fontSize: "16px" }}>Gmail</span>
        </div>
      </a>
      <a
        href="https://drive.google.com/file/d/1Kp_e07YfD9a0mp1hyz2RhFYo-nixT-_b/view?usp=sharing"
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaFilePdf
            size={32}
            style={{ marginRight: "5px", verticalAlign: "middle" }}
          />
          <span style={{ fontSize: "16px" }}>Resume</span>
        </div>
      </a>
    </div>
  );
};

export default LinksContainer;
