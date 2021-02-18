import { Box, Image } from "@chakra-ui/react";
import Chevron from "../../assets/chevron.png";

interface BackBtnProps {
  pos?: "initial" | "absolute";
}

export const BackBtn: React.FC<BackBtnProps> = ({
  pos = "initial",
}: BackBtnProps) => (
  <Box pos={pos} top="24px" left="24px" h="16px" w="16px" cursor="pointer">
    <Image src={Chevron} />
  </Box>
);
