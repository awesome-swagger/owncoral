import { Container, HeadingTypography } from '../../../components';
import { Box } from '@chakra-ui/react';

export const PopUp = ({
  handleClick,
  value,
}: {
  handleClick: (x: String | null) => void;
  value: String;
}) => {
  const popUpContent = {
    LogOut: { title: 'Log Out', text: 'Are you sure you want to logout' },
    DeleteAccount: {
      title: 'Delete Account',
      text: 'Are you sure do you want to Delete your account?',
    },
  };
  return (
    <Box w="100vw" h="100vh" pos="fixed" top="0" left="0" zIndex="3">
      <Container zIndex="5">
        <Box bg="#fff" className="popup_box">
          <HeadingTypography fontSize="sm">
            {value === 'LogOut' ? popUpContent.LogOut.text : popUpContent.DeleteAccount.text}
          </HeadingTypography>
          <hr />
          <HeadingTypography fontSize="lg" p={2}>
            {value === 'LogOut' ? popUpContent.LogOut.title : popUpContent.DeleteAccount.title}
          </HeadingTypography>
        </Box>
        <Box bg="#fff" className="popup_btn" onClick={() => handleClick(null)}>
          <HeadingTypography fontSize="lg">Cancel</HeadingTypography>
        </Box>
      </Container>
      <Box
        onClick={() => handleClick(null)}
        w="100%"
        h="100%"
        bg="#00000020"
        pos="absolute"
        top="0"
        left="0"
        zIndex="0"
      ></Box>
    </Box>
  );
};
