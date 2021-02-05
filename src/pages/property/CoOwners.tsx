/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Card } from "../../components";
import Avatar from "./Avatar";

const CoOwners: React.FC = () => {
  return (
    <div
      css={css`
        width: 100%;
        min-width: 450px;
        max-width: 750px;
      `}
    >
      <h1
        css={css`
          text-align: center;
        `}
      >
        Co-owners
      </h1>
      <Card
        css={css`
          margin: 20px 0;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: space-evenly;
            padding: 25px 0;
          `}
        >
          <Avatar
            name="Sophie"
            img="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
          />
          <Avatar
            name="John"
            img="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
          />
          <Avatar
            name="Josias"
            img="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
          />
        </div>
      </Card>
    </div>
  );
};
export default CoOwners;
