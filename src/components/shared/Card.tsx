/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css, CSSObject, withTheme } from '@emotion/react';
import { SerializedStyles } from '@emotion/serialize';
import React from 'react';

const StyledCard = withTheme(styled.div<{
  hasLink?: boolean;
  elevation: number;
}>`
  position: relative;

  border-radius: 16px;
  overflow: hidden;
  transition: all 0.15s ease-in-out;

  // Set depth to 8 if active, 2 otherwise, unless overridden by props.elevation
  ${(props) => props.theme.mdDepthShadow(props.elevation)}
  ${(props) =>
    props.theme.colors.overlay
      ? css`
          background-color: ${props.theme.colors.overlay(props.elevation)};
        `
      : css`
          background-color: ${props.theme.colors.bg};
        `};

  ${(props) =>
    props.hasLink &&
    css`
      :hover {
        box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
        transform: scale(1.01);
      }

      /* Disable hover on mobile */
      @media (pointer: coarse) {
        :hover {
          box-shadow: inherit;
          transform: none;
        }
      }
    `}
`);

type CardProps = {
  hasLink?: boolean;
  isActive?: boolean;
  elevation?: number;
  css?: CSSObject | SerializedStyles;
};
const Card: React.FC<CardProps> = ({ elevation, ...props }) => {
  return <StyledCard elevation={elevation != null ? elevation : props.isActive ? 8 : 2} {...props} />;
};

export default Card;
