/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/react/macro';
import { Card } from '../../components';
import { CardWrapper, AvatarImg } from './style';
import { TSubTitle1 } from '@app/client-web/src/components/shared/Typography';

const CoOwners: React.FC = () => {
  const coOwners = [
    { name: 'Ben', avatar: 'profile-icon-male-avatar-portrait-casual-person-vector-id530830041' },
    { name: 'Jenny', avatar: 'profile-icon-male-avatar-portrait-casual-person-vector-id530830041' },
    { name: 'Sophie', avatar: 'profile-icon-male-avatar-portrait-casual-person-vector-id530830041' },
  ];

  return (
    <CardWrapper>
      <h5 css={{ margin: '.3em 0' }}>Co-owners</h5>
      <Card>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            padding: 15px 0;
          `}
        >
          {coOwners.map((owner: any, index: number) => (
            <div key={index}>
              <AvatarImg alt="avatar" src={`https://media.gettyimages.com/vectors/${owner.avatar}`} />
              <div css={{ textAlign: 'center', margin: '.5em 0 0 0' }}>
                <TSubTitle1>{owner.name}</TSubTitle1>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </CardWrapper>
  );
};
export default CoOwners;
