import { Container } from '../../../components';
import { Box, Heading } from '@chakra-ui/react';

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
    <Box w="100vw" h="100vh" pos="fixed" top="0" left="0" zIndex="3" bg="#00000020">
      <Container zIndex="5">
        <Box bg="#fff" className="popup_box" zIndex="6">
          <Heading fontSize="sm">
            {value === 'LogOut' ? popUpContent.LogOut.text : popUpContent.DeleteAccount.text}
          </Heading>
          <hr />
          <Heading fontSize="lg" p={2}>
            {value === 'LogOut' ? popUpContent.LogOut.title : popUpContent.DeleteAccount.title}
          </Heading>
        </Box>
        <Box bg="#fff" className="popup_btn" onClick={() => handleClick(null)}>
          <Heading fontSize="lg">Cancel</Heading>
        </Box>
        <Box
          onClick={() => handleClick(null)}
          w="100%"
          h="100%"
          pos="absolute"
          top="0"
          left="0"
          zIndex="4"
        ></Box>
      </Container>
    </Box>
  );
};
