import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageComponentProps {
  src: StaticImageData;
  alt: string;
  width: number;
  height: number;
  quality: number;
  style?: React.CSSProperties;
}

const ImageComponent: React.FC<ImageComponentProps> = React.memo(
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

ImageComponent.displayName = "ImageComponent";

export default ImageComponent;
