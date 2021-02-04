/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Card } from "../../components";

const CoOwners: React.FC = () => {
  return (
    <div css={{ width: "100%", maxWidth: "450px" }}>
      <h1 css={{ textAlign: "center" }}>Co-owners</h1>
      <Card css={{ margin: "20px 0" }}>
        <div
          css={{
            display: "flex",
            justifyContent: "space-evenly",
            padding: "25px 0",
          }}
        >
          <div>
            <img
              css={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt="avatar"
              src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
            />
            <h2 css={{ textAlign: "center" }}>Ben</h2>
          </div>
          <div>
            <img
              css={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt="avatar"
              src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
            />
            <h2 css={{ textAlign: "center" }}>Jenny</h2>
          </div>
          <div>
            <img
              css={{ width: "80px", height: "80px", borderRadius: "50%" }}
              alt="avatar"
              src="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
            />
            <h2 css={{ textAlign: "center" }}>Sophie</h2>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default CoOwners;
