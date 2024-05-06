"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { url } from "inspector";
import React from "react";
import profilePic from "../../../Images/profilepic.jpeg";
import ImageComponent from "./ImageComponent";

const Main = () => {
  const text =
    "I'm Teja Darisi. A Software Developer passionate about creating meaningful and impactful applications.";

  const [intro, setIntro] = useState("");
  const [isWritingDone, setIsWritingDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntro((prevIntro) => {
        if (prevIntro.length === text.length) {
          setIsWritingDone(true);
          clearInterval(interval);
          return prevIntro;
        }
        const nextIndex = prevIntro.length + 1;
        return text.slice(0, nextIndex);
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        maxWidth: "80vw",
        padding: "20px",
        display: "flex",
        alignItems: "center",
        marginBottom: "40px",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "20px", width: "55%" }}>
        <ImageComponent
          src={profilePic}
          alt="Profile Image"
          width={500}
          height={900}
          quality={100}
          style={{
            objectFit: "cover",
            borderRadius: "8px",
            boxShadow: "0 0 8px 8px white inset",
          }}
        />
      </div>

      <div
        style={{
          padding: "20px",
          width: "45%",
          height: "100%",
          wordBreak: "break-word",
        }}
      >
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            color: "#fff",
            fontSize: "55px",
            fontWeight: "700",
            wordBreak: "break-word",
            maxWidth: "800px",
          }}
        >
          {intro.split("").map((el, index, arr) => {
            return (
              <span
                key={index}
                style={
                  (index > 3 && index < 15) || index + 1 === text.length
                    ? { color: "lightseagreen" }
                    : { color: "inherit" }
                }
              >
                {el}
              </span>
            );
          })}
          <span
            aria-hidden="true"
            className={isWritingDone ? styles.span : styles.span1}
          ></span>
        </h3>
      </div>
    </div>
  );
};

export default Main;
