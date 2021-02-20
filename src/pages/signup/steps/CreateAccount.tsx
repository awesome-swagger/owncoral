import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  forwardRef,
} from "react";
import { Box, Heading, Text, Input, Button } from "@chakra-ui/react";
import { CgClose } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { BackBtn } from "../../../components/backBtn";
import { StepFormContext } from "../../signup";
import { Container } from "../../../components/container";
import type { FormRef } from "../../signup";

type stepProps = {
  nextStep: () => void;
  prevStep: () => void;
};
const PopUpContent = {
  privacy: {
    title: "Privacy & Policay",
    text: "Privacy & Policy: Lorem ipsum dolor sit amet",
  },
  terms: {
    title: "Terms & Conditions",
    text: "Terms & Conditions: Lorem ipsum dolor sit amet",
  },
};
export const CreateAccount = forwardRef<FormRef, stepProps>(
  ({ nextStep, prevStep }: stepProps, ref) => {
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
      <form onSubmit={handleSubmit(onSubmit)} ref={ref}>
        <Container>
          <BackBtn pos="absolute" handleClick={prevStep} />

          <Heading
            size="md"
            mt="32px"
            mb="8px"
            textAlign="left"
            letterSpacing="normal"
          >
            Let’s create your account
          </Heading>
          <Text fontSize="1rem" textAlign="left" m="0 !important">
            Lorem ipsum dolor sir amet
          </Text>
          <Box mt="32px">
            <Text
              color="#4E504F"
              fontSize="1rem"
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
              fontSize="1rem"
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
          <Text
            fontSize="0.75rem"
            color="#4E504F"
            textAlign="left"
            m="8px 0 !important"
          >
            Must be at least 8 characters
          </Text>

          <Text
            w=" calc(100% - 48px)"
            fontSize="0.75rem"
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
        </Container>
      </form>
    );
  }
);
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
        <Box
          h="16px"
          w="16px"
          cursor="pointer"
          onClick={() => togglePopUp(false)}
        >
          <CgClose />
        </Box>
        <Heading
          size="md"
          mt="32px"
          mb="8px"
          textAlign="left"
          letterSpacing="normal"
        >
          {content.title}
        </Heading>
        <Text fontSize="1rem" textAlign="left" m="0 !important">
          {content.text}
        </Text>
      </Box>
    </Box>
  );
};
