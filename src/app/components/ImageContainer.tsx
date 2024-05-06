"use client";
import Image from "next/image";
import React, { useState } from "react";
import { PersonalProject } from "../data/portfolioData.interface";

const ImageContainer = ({ project }: { project: PersonalProject }) => {
  const [presentIndex, setIndex] = useState(0);

  const handleImageClick = (index: number) => setIndex(index);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "8px",
        zIndex: "0",
      }}
    >
      <Image
        src={project.images[presentIndex]}
        alt={project.name}
        width={450}
        height={300}
        style={{ borderRadius: "20px" }}
        layout="responsive"
        objectFit="cover"
      />

      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: "0",
        }}
      >
        {project.images.map((_, index) => (
          <span
            key={index}
            style={{
              background: index === presentIndex ? "lightseagreen" : "black",
              height: "12px",
              width: "12px",
              borderRadius: "50%",
              cursor: "pointer",
            }}
            onClick={() => handleImageClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
