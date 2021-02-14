/** @jsxRuntime classic */
/** @jsx jsx */

import * as TypographyStyles from '../../TypographyStyles';
import styled from '@emotion/styled';

/**
 * Text styles corresponding to material design guidelines,
 * applied to a span.
 *
 * This lets you use tags for styling (e.g. <TbodyText1>foo</TBodyText1>,
 * analogous to built-in header tags.
 *
 * We also export margin-less versions of header styles,
 * so
 */

export const TSubTitle1 = styled.span`
  ${TypographyStyles.subTitle1}
`;

export const TSubTitle2 = styled.span`
  ${TypographyStyles.subTitle2}
`;

export const TBodyText1 = styled.span`
  ${TypographyStyles.bodyText1}
`;

export const TBodyText2 = styled.span`
  ${TypographyStyles.bodyText2}
`;

export const TButton = styled.span`
  ${TypographyStyles.button}
`;

export const TCaption = styled.span`
  ${TypographyStyles.caption}
`;

export const TOverline = styled.span`
  ${TypographyStyles.overline}
`;

// Re-export margin-less versions of headers
// 'i' for 'inline'
export const Th1i = styled.h1`
  margin: 0;
`;

export const Th2i = styled.h2`
  margin: 0;
`;

export const Th3i = styled.h3`
  margin: 0;
`;

export const Th4i = styled.h4`
  margin: 0;
`;

export const Th5i = styled.h5`
  margin: 0;
`;

export const Th6i = styled.h6`
  margin: 0;
`;
