/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "@emotion/react";
import {
  Container,
  ImgButton,
  Button,
  InputField,
  InputLabel,
  PopUpText,
  Description,
  BottomText,
  PopUpBtn,
  PopUpWrapper,
  PopUpBox,
  Heading,
} from "../style";
import Chevron from "../../../../assets/chevron.png";
import Close from "../../../../assets/close.png";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const PopUpContent = {
  privacy: {
    title: "Privacy & Policay",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  terms: {
    title: "Terms & Conditions",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
};
const Step5: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popup, setPopup] = useState(false);
  const [activepopup, setActivepopup] = useState("");
  return (
    <Container>
      <ImgButton marginBottom onClick={prevStep}>
        <img src={Chevron} alt="backbutton" />
      </ImgButton>
      <h1>Let’s create your account</h1>
      <Description>Lorem ipsum dolor sir amet</Description>
      <InputLabel>
        <Description>Email</Description>
        <InputField
          type="email"
          placeholder="First Name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          WithLabel
        />
      </InputLabel>
      <InputLabel>
        <Description>Password</Description>
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          WithLabel
        />
      </InputLabel>
      <PopUpText>Must be at least 8 characters</PopUpText>
      <BottomText>
        By tapping “Continue” in the button below, you agree with the{" "}
        <PopUpBtn
          onClick={() => {
            setPopup(true);
            setActivepopup("terms");
          }}
        >
          terms and conditions
        </PopUpBtn>{" "}
        and{" "}
        <PopUpBtn
          onClick={() => {
            setPopup(true);
            setActivepopup("privacy");
          }}
        >
          privacy policy
        </PopUpBtn>{" "}
        provided by Coral
      </BottomText>
      <Button onClick={nextStep} disabled={email === "" || password === ""}>
        Continue
      </Button>
      {popup ? (
        <PopUp content={PopUpContent[activepopup]} togglePopUp={setPopup} />
      ) : (
        ""
      )}
    </Container>
  );
};
type PopupProps = {
  togglePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    title: string;
    text: string;
  };
};
export const PopUp: React.FC<PopupProps> = ({
  togglePopUp,
  content,
}: PopupProps) => {
  return (
    <PopUpWrapper>
      <PopUpBox>
        <ImgButton onClick={() => togglePopUp(false)}>
          <img src={Close} alt="close" />
        </ImgButton>
        <Heading>{content.title}</Heading>
        <PopUpText>{content.text}</PopUpText>
      </PopUpBox>
    </PopUpWrapper>
  );
};

export default Step5;
