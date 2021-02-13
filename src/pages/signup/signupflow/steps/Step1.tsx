import React, { useState } from "react";
import Chevron from "../../../../assets/chevron.png";
import Alert from "../../../../assets/alert.png";
import {
  Container,
  Option,
  OptionChevron,
  InputField,
  Description,
  Button,
  ImgButton,
  AlertBox,
  ReSendButton,
  BottomText,
  Heading,
} from "../style";
type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};

const Step1: React.FC<stepProps> = ({ nextStep, prevStep }: stepProps) => {
  const [available, setAvailable] = useState("Available");

  return (
    <div>
      {available === "Available" ? (
        <Container>
          <h1>Are you a U.S resident?</h1>
          <Option onClick={nextStep}>
            Yes <OptionChevron src={Chevron} />
          </Option>
          <Option onClick={() => setAvailable("TaxID")}>
            I have tax ID <OptionChevron src={Chevron} />
          </Option>
          <Option onClick={() => setAvailable("")}>
            No <OptionChevron src={Chevron} />
          </Option>
        </Container>
      ) : available === "TaxID" ? (
        <TaxID nextStep={nextStep} prevStep={prevStep} />
      ) : (
        <NotAvailable />
      )}
    </div>
  );
};

export const TaxID = ({ nextStep, prevStep }: stepProps) => {
  const [taxID, setTaxID] = useState("");
  return (
    <Container>
      <h1>Please enter your Tax ID</h1>
      <Description>Lorem ipsum dolor sir</Description>
      <InputField
        value={taxID}
        onChange={(e) => setTaxID(e.target.value)}
        type="text"
        placeholder="XX-XXXXXXX"
      />
      <Button disabled={!taxID.length} onClick={nextStep}>
        Continue
      </Button>
    </Container>
  );
};

export const NotAvailable = () => {
  return (
    <Container>
      <ImgButton>
        <img src={Chevron} alt="close" />
      </ImgButton>

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

export default Step1;
