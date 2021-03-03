import { Center, Avatar, AvatarBadge, Box } from '@chakra-ui/react';
import { BiCamera } from 'react-icons/all';
import theme from '../../../theme';
import { HeadingTypography } from '../../../components';

export const Header = () => (
  <Box>
    <Center m=".5rem 0">
      <Avatar name="john_doe" size="lg" src="https://bit.ly/sage-adebayo">
        <AvatarBadge boxSize="1em" bg={theme.colors.secondary[900]} p="2px" border="0">
          <BiCamera />
        </AvatarBadge>
      </Avatar>
    </Center>
    <HeadingTypography m="0" fontSize="2xl" align="center">
      John Doe
    </HeadingTypography>
    <HeadingTypography m="0" fontSize="md" align="center">
      jhondoe@gmail.com
    </HeadingTypography>
  </Box>
);
