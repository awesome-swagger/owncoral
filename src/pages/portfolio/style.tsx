/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled/macro';
import { jsx } from '@emotion/react/macro';
import Card from '../../components/shared/Card';
import React from 'react';

export const StyledTotalCard = styled(Card)`
  margin-top: 20px;
  padding: 0.5em 1.5em;
  width: 50%;
  min-width: 300px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 225%;
`;

export const Grid = styled.div`
  display: grid;

  padding: 1rem;
  grid-gap: 1.5rem 1rem;

  // Unlimited columns with min width, flexing to fill space
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
`;

// Card that keeps a 3:4 aspect ratio.
// We use a ::before selector to avoid an additional
// nested div.
//
// References:
// - https://css-tricks.com/aspect-ratio-boxes/
// - https://codepen.io/danield770/pen/bjYvOj
const StyledCard = styled(Card)`
  min-width: 280px;
  width: 80%; // Fill the grid container as it grows...
  max-width: 355px; // ...but not too much
  &::before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    padding-bottom: calc(4 / 3 * 100%);
  }
`;

const RatioDivContents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const RatioContainer: React.FC = (props) => (
  <StyledCard>
    <RatioDivContents>{props.children}</RatioDivContents>
  </StyledCard>
);
