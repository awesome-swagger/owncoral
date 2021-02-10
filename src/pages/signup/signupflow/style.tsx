/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  box-sizing: border-box;
`;
type OptionProps = {
  active?: boolean;
};
export const Option = styled.div`
  &:hover {
    box-shadow: 0 0 2px #88888830;
  }
  font-size: 15px;
  background-color: ${(props: OptionProps) =>
    props.active ? "#d2d2d1" : "#f3f3f3"};
  color: ${(props: OptionProps) => (props.active ? "#232525" : "#4e504f")};
  margin: 8px 0;
  padding: 12px 24px;
  line-height: 24px;
  cursor: pointer;
  position: relative;
`;
export const OptionChevron = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%) rotateZ(180deg);
`;
type ButtonProps = {
  disabled?: boolean;
};

export const Button = styled.button`
  width: calc(100% - 48px);
  box-sizing: border-box;
  background-color: ${(props: ButtonProps) =>
    props.disabled ? "#888888" : "#4E504F"};
  color: #ffffff;
  font-size: 17px;
  padding: 12px 0;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  bottom: 54px;
  left: 24px;
`;

export const ReSendButton = styled.button`
  width: calc(100% - 48px);
  box-sizing: border-box;
  background-color: transparent;
  color: #4e504f;
  font-size: 17px;
  padding: 12px 0;
  border: 1px solid #4e504f;
  outline: none;
  cursor: pointer;
  position: absolute;
  bottom: 54px;
  left: 24px;
`;

export const BottomText = styled.p`
  width: calc(100% - 48px);
  font-size: 11px;
  color: #4e504f;
  text-align: center;
  position: absolute;
  bottom: 106px;
  left: 24px;
`;

export const EyeIcon = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translate(0, -50%);
`;

export const InputField = styled.input`
  &::placeholder {
    color: #888888;
  }
  position:relative
  color: #4e504f;
  font-size: 15px;
  line-height: 24px;
  padding: 12px 16px;
  margin: 16px 0;
  background-color: #f3f3f3;
  border: none;
  outline: none;
`;
export const Description = styled.p`
  font-size: 15px;
  margin: 0px;
  color: #4e504f;
`;
export const AlertBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Heading = styled.h2`
  font-size: 20px;
  margin-top: 24px;
`;
export const PopUpBox = styled.div`
  margin: 60px auto 0 auto;
  width: 100%;
  max-width: 550px;
  min-height: 500px;
  padding: 24px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #fff;
  z-index: 1;
`;
export const PopUpWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00000030;
  position: absolute;
  top: 0px;
  left: 0px;
`;
export const PopUpText = styled.p`
  font-size: 13px;
  color: #4e504f;
`;
export const ImgButton = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;
export const ProgressBar = styled.div`
  background-color: #f3f3f3;
  height: 4px;
  border-radius: 2px;
  width: 100%;
  margin: 16px 0;
  overflow: hidden;
`;
type ProgressProps = {
  fill?: string;
};
export const Progress = styled.div`
  background-color: #4e504f;
  height: 100%;
  width: ${(props: ProgressProps) => props.fill};
  border-radius: 2px;
  transition: 1s;
`;
export const Avatar = styled.div`
  hieght: 160px;
  width: 160px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: #d2d2d1;
`;
