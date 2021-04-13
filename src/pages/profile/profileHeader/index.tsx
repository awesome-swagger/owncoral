import { useContext, useState } from 'react';
import { BiCamera } from 'react-icons/bi';
import { Avatar, AvatarBadge, Box, Center, Heading, Spinner } from '@chakra-ui/react';

import theme from '../../../theme';
import { UserContext } from '../../../userContext';

export const ProfileHeader = () => {
  const [loading, setLoading] = useState(true);
  const [user] = useContext(UserContext);

  return (
    <Box>
      {/* <Center m=".5rem 0"> */}
      {/*  <Avatar */}
      {/*    size="lg" */}
      {/*    name={[user?.legalFirst, user?.legalLast].join(' ')} */}
      {/*    onLoad={() => setLoading(false)} */}
      {/*  > */}
      {/*    {loading && <Spinner pos="absolute" />} */}
      {/*    <AvatarBadge boxSize="1em" bg={theme.colors.secondary[900]} p="2px" border="0"> */}
      {/*      <BiCamera /> */}
      {/*    </AvatarBadge> */}
      {/*  </Avatar> */}
      {/* </Center> */}
      <Heading mt={4} fontSize="2xl" align="center">
        {[user?.legalFirst, user?.legalLast].join(' ')}
      </Heading>
      <Heading m="0" fontSize="md" align="center">
        {user?.email}
      </Heading>
    </Box>
  );
};
