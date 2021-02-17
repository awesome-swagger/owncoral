/** @jsxRuntime classic */
import React, { useState } from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  InputGroup,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import Chevron from "../../../assets/chevron.png";

const RecoverPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [recover, setRecover] = useState<string>("Recover");

  return (
    <div>
      {recover === "Recover" ? (
        <Box p="24px" m="0" w="100%" h="100vh" pos="relative">
          <Box h="16px" w="16px" cursor="pointer">
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
            Recover your password
          </Heading>
          <Text
            fontSize="15px"
            textAlign="left"
            m="0 !important"
            color="#4E504F"
          >
            Enter the email address associated with your account and we will
            send you an email with instructions to recover your password
          </Text>
          <Text
            color="#4E504F"
            fontSize="15px"
            textAlign="left"
            m="32px 0px 8px 0px !important"
            w="100%"
          >
            Email
          </Text>
          <InputGroup mt="8px !important">
            <Input
              type="email"
              placeholder="Email address"
              bg="#F3F3F3"
              h="48px"
              value={email}
              onChange={(x) => setEmail(x.target.value)}
            />
          </InputGroup>
          <Button
            disabled={!email}
            pos="absolute"
            bottom="42px"
            left="24px"
            w="calc(100% - 48px)"
            h="48px"
            bg="#4E504F"
            color="#fff"
            onClick={() => setRecover("CheckEmail")}
          >
            Send Instructions
          </Button>
        </Box>
      ) : recover === "CheckEmail" ? (
        <CheckEmail onRecover={setRecover} />
      ) : (
        <NewPassword />
      )}
    </div>
  );
};

interface CheckEmailProps {
  onRecover: React.Dispatch<React.SetStateAction<string>>;
}

export const CheckEmail: React.FC<CheckEmailProps> = ({
  onRecover,
}: CheckEmailProps) => {
  return (
    <Flex
      p="24px"
      m="0"
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
    >
      <Box
        h="16px"
        w="16px"
        cursor="pointer"
        pos="absolute"
        left="24px"
        top="24px"
      >
        <Image src={Chevron} />
      </Box>
      <Box h="160px" w="160px" borderRadius="50%" bg="#d2d2d1" />
      <Heading as="h1" size="md" mt="32px" letterSpacing="normal">
        Check your email
      </Heading>
      <Text fontSize="15px" m="0 !important">
        We have sent a password recover instructions
      </Text>
      <Text
        color="#4E504F"
        pos="absolute"
        bottom="106px"
        fontSize="13px"
        m="0 !important"
      >
        Didn’t receive an email? <br />
        Check your spam folder or try with another email
      </Text>
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
        onClick={() => onRecover("NewPassword")}
      >
        Open email app
      </Button>
    </Flex>
  );
};
export const NewPassword: React.FC = () => {
  return (
    <Box p="24px" m="0" w="100%" h="100vh" pos="relative">
      <Box h="16px" w="16px" cursor="pointer">
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
        Create a new password
      </Heading>
      <Text fontSize="15px" textAlign="left" m="0 !important" color="#4E504F">
        Lorem ipsum dolor sir amet
      </Text>
      <Text
        color="#4E504F"
        fontSize="15px"
        textAlign="left"
        m="32px 0px 8px 0px !important"
        w="100%"
      >
        Password
      </Text>
      <Input type="password" placeholder="Password" bg="#F3F3F3" h="48px" />
      <Text
        m="8px 0 0 0 !important"
        fontSize="11px"
        w="100%"
        color="#4E504F"
        textAlign="left"
      >
        Must be at least 8 characters
      </Text>
      <Text m=" 0 !important" bottom="106px" pos="absolute" fontSize="11px">
        By tapping “Continue” in the button below, you agree with the terms and
        conditions and privacy policy provided by Coral
      </Text>
      <Button
        pos="absolute"
        bottom="42px"
        left="24px"
        w="calc(100% - 48px)"
        h="48px"
        bg="#4E504F"
        color="#fff"
      >
        Reset and Log in
      </Button>
    </Box>
  );
};
export default RecoverPassword;
