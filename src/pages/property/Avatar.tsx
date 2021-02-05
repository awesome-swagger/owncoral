/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";

type AvatarProps = {
  img: string;
  name: string;
};

const Avatar: React.FC<AvatarProps> = ({ img, name }) => {
  return (
    <div>
      <img
        css={css`
          width: 80px;
          height: 80px;
          border-radius: 50%;
        `}
        alt="avatar"
        src={img}
      />
      <h2
        css={css`
          text-align: center;
        `}
      >
        {name}
      </h2>
    </div>
  );
};
export default Avatar;
