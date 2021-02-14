/** @jsxRuntime classic */
/** @jsx jsx */

import styled from '@emotion/styled';

// Standard table with 'right' classname for aligning
export const Table = styled.table`
  width: 100%;

  tbody > tr {
    width: 100%;
    td {
      white-space: nowrap;
    }
  }
`;
