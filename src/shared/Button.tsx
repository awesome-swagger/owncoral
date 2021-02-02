/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import * as React from "react";

const Button = ({ width, ...rest }: any) => (
  <button
    css={css`
      border-radius: 100vh; /* Rounded sides */
      padding: 0.7rem 1.2rem;
      background-color: var(--main-color);
      color: white;
      border: 0;
      cursor: pointer;

      :focus {
        border: 0;
        outline: 0;
      }

      :hover {
        color: gray;
      }
    `}
    {...rest}
  />
);

export default Button;
