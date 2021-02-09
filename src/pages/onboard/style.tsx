/** @jsxRuntime classic */
/** @jsx jsx */
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
`;

export const InputLabel = styled.label`
  position: relative;
  display: block;
  margin: 15px 0;
`;
export const InputName = styled.span`
  background-color: #fff;
  color: #a8dadc;
  position: absolute;
  font-weight: bold;
  padding: 0 5px;
  top: -7px;
  left: 15px;
`;
export const InputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  color: #3169fb;
  padding: 15px 10px;
  border-radius: 4px;
  border: 2px solid #a8dadc;
  outline: none;
`;

type ButtonProps = {
  disabled?: boolean;
};

export const Button = styled.button`
  height: 55px;
  width: 175px;
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: ${(props: ButtonProps) =>
    props.disabled ? "#F6F8FA" : "#3169fb"};
  color: ${(props: ButtonProps) => (props.disabled ? "#C0CBE4" : "#fff")};
  font-size: 16px;
  font-weight: bold;
  border-radius: 40px;
  border: none;
  cursor: pointer;
  outline: none;
`;
type OptionBoxProps = {
  active?: boolean;
};
export const OptionBox = styled.div`
  padding: 10px 15px;
  margin: 10px;
  min-width: 50px;
  border-radius: 15px;
  background-color: ${(props: OptionBoxProps) =>
    props.active ? "#3169fb" : " #f6f8fa"};
  color: ${(props: OptionBoxProps) => (props.active ? "#f6f8fa" : "")};
  text-align: center;
  cursor: pointer;
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Description = styled.p`
  font-size: 18px;
  margin: 0px;
`;

export const RadioLabel = styled.label`
  position: relative;
  display: flex;
  margin: 10px 0;
  align-items: center;
  background-color: #f6f8fa;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
`;
export const RadioName = styled.label`
  margin: 0 10px;
  color: #3169fb;
  font-weight: bold;
  font-size: 16px;
`;
