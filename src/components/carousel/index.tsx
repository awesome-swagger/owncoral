/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
interface Props {
  img: string,
  alt: string
}
const CarouselImg: React.FC<Props> = ({ img, alt }) => {
  return (
    <div>
      <img
        css={css`
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
        `}
        src={img}
        alt={alt}
      />
    </div>
  );
};
export default CarouselImg;
