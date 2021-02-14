/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';

export const Content = withTheme(styled.div`
  margin-top: ${(props) => props.theme.navHeight};
  margin-bottom: ${(props) => props.theme.navHeight};
  background-color: rgba(0, 0, 0, 0);
`);
