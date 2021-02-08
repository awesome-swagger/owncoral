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

export const Container = styled.div`
  display: "flex";
  flex-wrap: "wrap";
  align-content: "space-evenly";
  align-items: "center";
  flex-direction: "column";
`;

export const Box = styled(Card)`
  margin: 20px auto;
  width: 100%;
  height: 65vw;
  max-width: 750px;
  min-height: 250px;
  max-height: 575px;
`;
type SpaceBoxProps = {
  flex?: boolean;
};
export const SpaceBox = styled.div`
  padding: 13px;
  display: ${(props: SpaceBoxProps) => (props.flex ? "flex" : "")};
`;

export const DetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const RightBox = styled.div`
  position: absolute;
  text-align: right;
  right: 20px;
  top: 13px;
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

export const CardWrapper = styled.div`
  margin: 0 5px;
  min-width: 320px;
  align-items: end;
  h1 {
    text-align: center;
  }

  > div {
    margin: 20px 0;
  }
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

export const PriceItem = styled(RentItem)`
  margin: 5px 0;
`;

export const AvatarImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;

  & ~ h2 {
    text-align: center;
  }
`;

export const CarouselImg = styled.img`
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
`;
