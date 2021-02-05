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

type PriceItemProps = {
  extraSpace?: boolean;
};

export const PriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
  padding-left: ${(props: PriceItemProps) =>
    props.extraSpace ? "25px" : "0px"};
`;
type RentItemProps = {
  extraSpace?: boolean;
};

export const RentItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${(props: RentItemProps) => (props.extraSpace ? "5px 0" : "0")};
  paddingleft: ${(props: RentItemProps) => (props.extraSpace ? "25px" : "0")};
`;
