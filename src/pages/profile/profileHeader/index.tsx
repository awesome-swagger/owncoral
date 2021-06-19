import { useContext, useState } from 'react';
// import { BiCamera } from 'react-icons/bi';
// import { Avatar, AvatarBadge, Box, Center, Heading, Spinner } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import { Headline, Title1 } from '../../../components/text';
import { UserContext } from '../../../userContext';

export const ProfileHeader = () => {
  const [loading, setLoading] = useState(true);
  const [user] = useContext(UserContext);

  return (
    <Box mb={4}>
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
      <Title1 mb={2} align="center">
        {[user?.legalFirst, user?.legalLast].join(' ')}
      </Title1>
      <Headline align="center">{user?.email}</Headline>
    </Box>
  );
};
