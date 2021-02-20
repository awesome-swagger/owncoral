// @ts-nocheck
import React from "react";
import { Box } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";

interface BackBtnProps {
  pos?: "initial" | "absolute";
  handleClick: () => void;
}

export const BackBtn: React.FC<BackBtnProps> = ({
  pos = "initial",
  handleClick,
}: BackBtnProps) => (
  <Box pos={pos} top="24px" left="24px" cursor="pointer" onClick={handleClick}>
    <BsChevronLeft style={{ height: "16px", width: "16px" }} />
  </Box>
);
