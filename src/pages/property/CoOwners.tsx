/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Card } from "../../components";
import { CardWrapper, AvatarImg } from "./style";

const CoOwners: React.FC = () => {
  return (
    <CardWrapper>
      <h1> Co-owners </h1>
      <Card>
        <div
          css={css`
            display: flex;
            justify-content: space-evenly;
            padding: 25px 0;
          `}
        >
          <div>
            <AvatarImg
              alt="avatar"
              src="https://media.gettyimages.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530830041"
            />
            <h2>Ben</h2>
          </div>
          <div>
            <AvatarImg
              alt="avatar"
              src="https://media.gettyimages.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530830041"
            />
            <h2>Jenny</h2>
          </div>
          <div>
            <AvatarImg
              alt="avatar"
              src="https://media.gettyimages.com/vectors/profile-icon-male-avatar-portrait-casual-person-vector-id530830041"
            />
            <h2>Sophie</h2>
          </div>
        </div>
      </Card>
    </CardWrapper>
  );
};
export default CoOwners;
