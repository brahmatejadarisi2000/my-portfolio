

// AboutMePage.js
import React from "react";
import { portfolioData } from "../data/portfolioData";
import styles from "./AboutMePage.module.css";

const AboutMePage = () => {
  const { personalInfo } = portfolioData;

  return (
    <div className={styles.aboutMeContainer}>
      <h1>About Me</h1>
      <div className={styles.personalInfo}>
        <p><strong>Name:</strong> {personalInfo.name}</p>
        <p><strong>Email:</strong> {personalInfo.email}</p>
        <p><strong>Phone:</strong> {personalInfo.phone}</p>
        {/* <p><strong>Location:</strong> {personalInfo.location}</p> */}
        <p><strong>LinkedIn:</strong> <a href={"https://" + personalInfo.linkedin}>{personalInfo.linkedin}</a></p>
        <p><strong>GitHub:</strong> <a href={"https://" + personalInfo.github}>{personalInfo.github}</a></p>
      </div>
    </div>
  );
};

export default AboutMePage;



