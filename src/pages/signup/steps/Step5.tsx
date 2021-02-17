import React, { useCallback, useContext, useEffect, useState } from "react";
import { Box, Heading, Text, Input, Button, Image } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import Chevron from "../../../assets/chevron.png";
import Close from "../../../assets/close.png";
import { StepFormContext } from "../../signup";

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
  const { handleSubmit, register, setValue, watch } = useForm();
  const form = useContext(StepFormContext);

  const email = watch("email");
  const password = watch("password");

  const [popup, setPopup] = useState<boolean>(false);
  const [activepopup, setActivepopup] = useState<"privacy" | "terms">(
    "privacy"
  );

  const onSubmit = useCallback(
    (data) => {
      form.dispatch({ type: "update-form", payload: { step5: data } });
      nextStep();
    },
    [handleSubmit]
  );

  useEffect(() => {
    const formState = form.formState;

    setValue("email", formState?.step5?.email);
    setValue("password", formState?.step5?.password);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box p="24px" m="0" w="100%" h="100vh">
        <Box h="16px" w="16px" cursor="pointer" onClick={() => prevStep()}>
          <Image src={Chevron} />
        </Box>
        <Heading
          as="h1"
          size="md"
          mt="32px"
          mb="8px"
          textAlign="left"
          letterSpacing="normal"
        >
          Let’s create your account
        </Heading>
        <Text fontSize="15px" textAlign="left" m="0 !important">
          Lorem ipsum dolor sir amet
        </Text>
        <Box mt="32px">
          <Text
            color="#4E504F"
            fontSize="15px"
            textAlign="left"
            m="0 !important"
          >
            Email
          </Text>
          <Input
            h="48px"
            bg="#F3F3F3"
            mt="8px"
            placeholder="Email"
            ref={register}
            name="email"
          />
        </Box>
        <Box mt="32px">
          <Text
            color="#4E504F"
            fontSize="15px"
            textAlign="left"
            m="0 !important"
          >
            Password
          </Text>
          <Input
            type="password"
            h="48px"
            bg="#F3F3F3"
            mt="8px"
            placeholder="Password"
            name="password"
            ref={register}
          />
        </Box>
        <Text fontSize="11px" color="#4E504F" textAlign="left" m="0 !important">
          Must be at least 8 characters
        </Text>

        <Text
          w=" calc(100% - 48px)"
          fontSize="11px"
          color="#4e504f"
          pos="absolute"
          bottom="106px"
          left="24px"
        >
          By tapping “Continue” in the button below, you agree with the{" "}
          <span
            onClick={() => {
              setPopup(true);
              setActivepopup("terms");
            }}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            terms and conditions
          </span>{" "}
          and{" "}
          <span
            onClick={() => {
              setPopup(true);
              setActivepopup("privacy");
            }}
            style={{ textDecoration: "underline", cursor: "pointer" }}
          >
            privacy policy
          </span>{" "}
          provided by Coral
        </Text>
        <Button
          disabled={email === "" || password === ""}
          pos="absolute"
          bottom="42px"
          left="24px"
          w="calc(100% - 48px)"
          h="48px"
          bg="#4E504F"
          color="#fff"
          type="submit"
        >
          Continue
        </Button>
        {popup ? (
          <PopUp content={PopUpContent[activepopup]} togglePopUp={setPopup} />
        ) : (
          ""
        )}
      </Box>
    </form>
  );
};
type PopupProps = {
  togglePopUp: React.Dispatch<React.SetStateAction<boolean>>;
  content: {
    title: string;
    text: string;
  };
};
const PopUp: React.FC<PopupProps> = ({ togglePopUp, content }: PopupProps) => {
  return (
    <Box
      w="100vw"
      h=" 100vh"
      bg=" #00000030"
      pos="absolute"
      top="0px"
      left="0px"
    >
      <Box
        m=" 60px auto 0 auto"
        w="100%"
        maxW=" 550px"
        minH=" 500px"
        p=" 24px"
        borderRadius=" 10px"
        bg=" #fff"
        zIndex={1}
      >
        <Box h="16px" w="16px" cursor="pointer">
          <Image src={Close} onClick={() => togglePopUp(false)} />
        </Box>
        <Heading
          as="h1"
          size="md"
          mt="32px"
          mb="8px"
          textAlign="left"
          letterSpacing="normal"
        >
          {content.title}
        </Heading>
        <Text fontSize="15px" textAlign="left" m="0 !important">
          {content.text}
        </Text>
      </Box>
    </Box>
  );
};

export default Step5;
