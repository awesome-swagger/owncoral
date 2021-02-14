/** @jsxRuntime classic */
/** @jsx jsx */

import styled from '@emotion/styled';

export const TitleBar = styled.div`
  background-color: ${({ theme: { isDarkMode, colors } }) => {
    return isDarkMode ? colors.bg2 : colors.sFg;
  }};
  color: ${({ theme: { isDarkMode, colors } }) => (isDarkMode ? colors.fg2 : colors.bg2)};
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
`;
