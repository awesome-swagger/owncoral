import { Box } from "@chakra-ui/react";
import { BsChevronLeft } from "react-icons/bs";

interface BackBtnProps {
  pos?: "initial" | "absolute";
}

export const BackBtn: React.FC<BackBtnProps> = ({
  pos = "initial",
}: BackBtnProps) => (
  <Box pos={pos} top="24px" left="24px" cursor="pointer">
    <BsChevronLeft style={{ height: "16px", width: "16px" }} />
  </Box>
);
