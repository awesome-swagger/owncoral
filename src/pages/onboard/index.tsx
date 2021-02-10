/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import Stepform from "./Stepform";
import InvestingExperience from "./InvestingExperience";
import Member from "./Member";
import UserName from "./UserName";
import Name from "./Name";

const OnBoard = () => {
  return (
    <div>
      <Stepform
        step0={(setStep: any) => <InvestingExperience onProceed={setStep} />}
        step1={(setStep: any) => <Member onProceed={setStep} />}
        step2={(setStep: any) => <UserName onProceed={setStep} />}
        step3={(setStep: any) => <Name onProceed={setStep} />}
      />
    </div>
  );
};

export default OnBoard;
