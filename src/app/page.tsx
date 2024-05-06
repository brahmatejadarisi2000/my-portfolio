// AboutMePage.js
import React from "react";
import { portfolioData } from "./data/portfolioData";
import styles from "./page.module.css";

const AboutMePage = () => {
  const {
    personalInfo,
    workExperience,
    education,
    skills,
    certifications,
    personalProjects,
  } = portfolioData;

  return (
    <div className={styles.aboutMeContainer}>
      <div className={styles.personalInfo}>
        <h1>About Me</h1>
        <p>
          <strong>Name:</strong> {personalInfo.name}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${personalInfo.email}`} className={styles.emailLink}>
            {personalInfo.email}
          </a>
        </p>
        <p>
          <strong>Phone:</strong> {personalInfo.phone}
        </p>
        <p>
          <strong>Location:</strong> {personalInfo?.location}
        </p>
        <p>
          <strong>LinkedIn:</strong>{" "}
          <a
            href={"https://" + personalInfo.linkedin}
            className={styles.externalLink}
          >
            {personalInfo.linkedin}
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{" "}
          <a
            href={"https://" + personalInfo.github}
            className={styles.externalLink}
          >
            {personalInfo.github}
          </a>
        </p>
      </div>

      <div className={styles.section}>
        <h2>Introduction</h2>
        <p>
          Hi, I'm {personalInfo.name}, a passionate software engineer based in{" "}
          {personalInfo.location}. With a strong background in web development
          and a keen interest in solving complex problems, I strive to deliver
          high-quality solutions that make a difference.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Skills</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Work Experience</h2>
        {workExperience.map((experience, index) => (
          <div key={index} className={styles.experienceItem}>
            <h3>{experience.title}</h3>
            <p>
              {experience.company} - {experience.location}
            </p>
            <p>{experience.dates}</p>
            <ul>
              {experience.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p>
              <strong>Technology Stack:</strong>{" "}
              {experience.technologyStack.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2>Education</h2>
        <p>
          <strong>Degree:</strong> {education.degree}
        </p>
        <p>
          <strong>University:</strong> {education.university}
        </p>
        <p>
          <strong>Dates:</strong> {education.dates}
        </p>
        <p>
          <strong>Location:</strong> {education.location}
        </p>
      </div>

      <div className={styles.section}>
        <h2>Personal Projects</h2>
        {personalProjects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technology Stack:</strong>{" "}
              {project.technologyStack.join(", ")}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.section}>
        <h2>Certifications</h2>
        {certifications.map((certification, index) => (
          <div key={index} className={styles.certificationItem}>
            <h3>{certification.name}</h3>
            <p>
              {certification.dates} - {certification.issuer}
            </p>
            <p>{certification.description}</p>
          </div>
        ))}
      </div>

      <footer className={styles.footer}>
        <p>
          © {new Date().getFullYear()} All rights reserved. Designed and
          developed by {personalInfo.name}
        </p>
      </footer>
    </div>
  );
};

export default AboutMePage;
