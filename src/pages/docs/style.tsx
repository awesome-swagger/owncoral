/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";
import { Card } from "../../components";

export const TopBar = styled.div`
  background: linear-gradient(
    115deg,
    rgba(30, 170, 100, 1) 0%,
    rgba(50, 180, 80, 1) 48%,
    rgba(60, 190, 70, 1) 100%
  );
  height: 110px;
  padding-top: 25px;
  margin: -30px;
  text-align: center;
  color: var(--light-color);
`;

export const Container = styled(Card)`
  padding: 13px;
  margin: 10px auto;
  max-width: 750px;
  text-align: center;
`;
