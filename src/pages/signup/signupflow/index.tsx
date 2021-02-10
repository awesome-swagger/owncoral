/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  Container,
  Option,
  Button,
  InputField,
  Description,
  AlertBox,
  Heading,
  BottomText,
  ReSendButton,
  PopUpBox,
  PopUpWrapper,
  PopUpText,
  ImgButton,
  ProgressBar,
  Progress,
  OptionChevron,
} from "./style";
import Alert from "../../../assets/alert.png";
import Close from "../../../assets/close.png";
import Chevron from "../../../assets/chevron.png";

export const Resident = () => {
  return (
    <Container>
      <h1>Are you a U.S resident?</h1>
      <Option>Yes</Option>
      <Option active>
        I have tax ID
        <OptionChevron src={Chevron} />
      </Option>
      <Option>No</Option>
    </Container>
  );
};

export const Name = () => {
  return (
    <Container>
      <h1>What’s your full name?</h1>
      <Description>Lorem ipsum dolor sir</Description>
      <InputField type="text" placeholder="First Name" />
      <InputField type="text" placeholder="Last Name" />
      <Button disabled>Continue</Button>
    </Container>
  );
};

export const TextID = () => {
  return (
    <Container>
      <h1>Please enter your Tax ID</h1>
      <Description>Lorem ipsum dolor sir</Description>
      <InputField type="text" placeholder="XX-XXXXXXX" />
      <Button>Continue</Button>
    </Container>
  );
};
export const NotAvailable = () => {
  return (
    <Container>
      <ImgButton>
        <img src={Chevron} alt="close" />
      </ImgButton>
      <ProgressBar>
        <Progress fill="20%" />
      </ProgressBar>
      <AlertBox>
        <img src={Alert} alt="alert" height="64" width="64" />
        <Heading>Sorry, Coral is only available for U.S. residents</Heading>
        <Description>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Description>
      </AlertBox>
      <BottomText>
        By tapping “Continue” in the button below, you agree with the terms and
        conditions and privacy policy provided by Coral
      </BottomText>
      <ReSendButton>Dismiss</ReSendButton>
    </Container>
  );
};
export const PopUp = () => {
  return (
    <PopUpWrapper>
      <PopUpBox>
        <ImgButton>
          <img src={Close} alt="close" />
        </ImgButton>
        <Heading>Privacy policy</Heading>
        <PopUpText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. <br />
          <br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </PopUpText>
      </PopUpBox>
    </PopUpWrapper>
  );
};
const SignUpFlow = () => {
  return (
    <div>
      <Resident />
    </div>
  );
};

export default SignUpFlow;
