/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";
import { Card } from "../../components";

export const Container = styled(Card)`
  max-width: 1250px;
  margin: 10px auto;
`;

export const Box = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SmallBox = styled.div`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxY = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LargeBox = styled.div`
  max-width: 1250px;
  margin: 50px auto 0px auto;
`;
