/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";
import { Card } from "../../components";
import { CardWrapper, AvatarImg } from "./style";

const CoOwners: React.FC = () => {
  const coOwners = [
    {name: "Ben", avatar: "profile-icon-male-avatar-portrait-casual-person-vector-id530830041"},
    {name: "Jenny", avatar: "profile-icon-male-avatar-portrait-casual-person-vector-id530830041"},
    {name: "Sophie", avatar: "profile-icon-male-avatar-portrait-casual-person-vector-id530830041"}
  ];

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
          {coOwners.map((owner:any, index:number) => (
            <div key={index}>
              <AvatarImg
                alt="avatar"
                src={`https://media.gettyimages.com/vectors/${owner.avatar}`}
              />
              <h2>{ owner.name }</h2>
            </div>
          ))}
        </div>
      </Card>
    </CardWrapper>
  );
};
export default CoOwners;
