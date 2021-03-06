import { useState } from 'react';
import { Center, Avatar, AvatarBadge, Box, Heading, Spinner } from '@chakra-ui/react';
import { BiCamera } from 'react-icons/bi';
import theme from '../../../theme';

export const Header = () => {
  const [loading, setLoading] = useState(true);
  console.log('img loading', loading);
  return (
    <Box>
      <Center m=".5rem 0">
        <Avatar size="lg" src="https://bit.ly/sage-adebayo" onLoad={() => setLoading(false)}>
          {loading ? <Spinner pos="absolute" /> : ''}
          <AvatarBadge boxSize="1em" bg={theme.colors.secondary[900]} p="2px" border="0">
            <BiCamera />
          </AvatarBadge>
        </Avatar>
      </Center>
      <Heading m="0" fontSize="2xl" align="center">
        John Doe
      </Heading>
      <Heading m="0" fontSize="md" align="center">
        jhondoe@gmail.com
      </Heading>
    </Box>
  );
};
