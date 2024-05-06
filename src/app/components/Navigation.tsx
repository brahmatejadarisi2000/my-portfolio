"use client";
// Navigation.tsx
import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [borderWidth, setBorderWidth] = useState("1px");
  const scrollItem = (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const target = e.target as HTMLElement;
    const id = target.id;
    const item = document.getElementsByClassName(id);

    if (item[0]) {
      item[0].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position
      const isScrolled = window.scrollY > 0;

      setScrolled(isScrolled);
    };

    // Add event listener for scroll events
    window.addEventListener("scroll", handleScroll);

    // Clean up by removing event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / scrollableHeight) * 100;
      const borderWidthPercentage = Math.min(100, scrollPercentage);

      setBorderWidth(`${borderWidthPercentage}%`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "sticky",
        top: "0",
        marginBottom: "8px",
        ...(scrolled && {
          background: "black",
          zIndex: "999",
        }),
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          transition: "background 0.3s ease",
          margin: "0 2vw",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "Helvetica Neue",
            fontSize: "30px",
            fontWeight: "bold",
            color: "lightseagreen",
            fontStyle: "normal",
          }}
        >
          {scrolled ? "TeJa" : "HeLLo..."}
        </h2>
        <ul className={styles.navList} onClick={scrollItem}>
          <li id="Experience">{"Experience"}</li>
          <li id="MyProjects">{"MyProjects"}</li>
          <li id="Certifications">{"Certifications"}</li>
          <li id="Contact">{"Contact"}</li>
        </ul>
      </div>
      <div
        style={{
          background: "lightseagreen",
          height: "4px",
          width: borderWidth,
        }}
      ></div>
    </div>
  );
};

export default Navigation;
