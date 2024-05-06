import React from "react";
import Image from "next/image";

interface ImageComponent {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality: number;
  style?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageComponent> = React.memo(
  ({ src, alt, width, height, quality, style }) => (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      quality={quality}
      style={style}
    />
  )
);

export default ImageComponent;
