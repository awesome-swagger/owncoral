/** @jsxRuntime classic */
/** @jsx jsx */
import styled from '@emotion/styled/macro';
import Card from '../../components/shared/Card';

export const TopBar = styled.div`
  background: linear-gradient(115deg, rgba(30, 170, 100, 1) 0%, rgba(50, 180, 80, 1) 48%, rgba(60, 190, 70, 1) 100%);
  height: 110px;
  padding-top: 25px;
  margin: -30px;
  text-align: center;
  color: var(--light-color);
`;

export const Container = styled.div`
  padding: 20px;
  display: 'flex';
  flex-wrap: 'wrap';
  align-content: 'space-evenly';
  align-items: 'center';
  flex-direction: 'column';
`;

export const Box = styled(Card)`
  margin: 20px auto;
  width: 100%;
  height: 65vw;
  max-width: 750px;
  min-height: 250px;
  max-height: 575px;
`;

export const DetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & > div {
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const RightBox = styled.div`
  position: absolute;
  text-align: right;
  right: 20px;
  top: 13px;
`;

export const TotalCard = styled(Card)`
  width: 50%;
  min-width: 300px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  line-height: 200%;

  padding: 1em 0;
  line-height: 200%;
`;

export const CardWrapper = styled.div`
  margin: 0 1.25em;
  min-width: 280px;
  width: 320px;
  flex-grow: 0.9;
  align-items: end;
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
