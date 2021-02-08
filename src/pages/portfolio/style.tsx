/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";
import Card from "../../components/card";

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

export const TotalCard = styled(Card)`
  margin-top: -75px;
  margin-bottom: 0px;
  padding: 5px 0;
  min-width: 200px;
  max-width: 400px;
  /* 50% - half the max width */
  margin-left: calc(50vw - 200px);
  margin-right: calc(50vw - 200px);
  font-size: 120%;
  line-height: 200%;
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  flex-wrap: wrap;
`;

export const BoxRight = styled.div`
  position: absolute;
  text-align: right;
  right: 20px;
  top: 13px;
`;

export const Wrapper = styled.div`
  font-weight: bold;
  border-bottom: 1px solid lightgray;
  padding: 8px 20px;
  font-size: 120%;
`;
