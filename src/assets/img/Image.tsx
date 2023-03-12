import React from "react";
interface IImage {
  src: string;
  fallback: string;
  type: "image" | "webp" | "image/webp";
  alt: string;
}

const Image = ({ src, fallback, type = "image/webp", alt }: IImage): JSX.Element => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} />
    </picture>
  );
};

export default Image;
