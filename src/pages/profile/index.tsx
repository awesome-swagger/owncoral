import { useState, useRef, useLayoutEffect } from 'react';
import { Container } from '../../components';
import { Center, Avatar, AvatarBadge, Heading, Box } from '@chakra-ui/react';
import theme from '../../theme';
import { Option } from '../../components';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { PersonalInformation } from './personalInformation';
import {
  FaRegDotCircle,
  BsPerson,
  BiCamera,
  BsCircle,
  BsQuestionCircle,
  BiSupport,
  ImFileEmpty,
  FiLogOut,
  RiDeleteBin6Line,
} from 'react-icons/all';

export const Profile = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [overLay, setOverLay] = useState(false);

  const handleClose = () => setOverLay(false);
  const handleClick = () => setOverLay(true);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  }, [overLay]);

  return (
    <Container ref={ref}>
      <Center m=".5rem 0">
        <Avatar name="john_doe" size="lg" src="https://bit.ly/sage-adebayo">
          <AvatarBadge boxSize="1em" bg={theme.colors.secondary[900]} p="2px" border="0">
            <BiCamera />
          </AvatarBadge>
        </Avatar>
      </Center>
      <Heading m="0" fontSize="1.5rem" align="center">
        John Doe
      </Heading>
      <Heading m="0" fontSize="1rem" align="center">
        jhondoe@gmail.com
      </Heading>
      <Box mt="2rem">
        <Heading fontSize="1rem">Account</Heading>
        <Option onClick={handleClick}>
          <BsPerson
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Personal Inforamtion
          </Heading>
        </Option>
        <Option>
          <FaRegDotCircle
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Investment Goal
          </Heading>
        </Option>
        <Option>
          <IoMdNotificationsOutline
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Notifications
          </Heading>
        </Option>
      </Box>
      <Box mt="2rem">
        <Heading fontSize="1rem">Help</Heading>
        <Option>
          <BsCircle
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            About Coral
          </Heading>
        </Option>
        <Option>
          <BsQuestionCircle
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            FAQS
          </Heading>
        </Option>
        <Option>
          <BiSupport
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Support
          </Heading>
        </Option>
      </Box>
      <Box mt="2rem">
        <Heading fontSize="1rem">Legal</Heading>
        <Option>
          <ImFileEmpty
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Terms & Conditions
          </Heading>
        </Option>
        <Option>
          <ImFileEmpty
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Privacy Policy
          </Heading>
        </Option>
      </Box>
      <Box mt="2rem">
        <Option>
          <FiLogOut
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Log out
          </Heading>
        </Option>
        <Option>
          <RiDeleteBin6Line
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <Heading fontSize="0.85rem" m="0">
            Delete Account
          </Heading>
        </Option>
      </Box>
      <Box
        zIndex="2"
        pos="absolute"
        left={overLay ? { base: '0%', md: '2%' } : '100%'}
        top={{ base: '0%', md: '2%' }}
        w={{ base: '100%', md: '96%' }}
        h={{ base: '100%', md: '96%' }}
        bg="#fff"
        transition=".45s"
        borderRadius={{ base: 'none', md: '2xl' }}
        boxShadow="md"
      >
        <PersonalInformation goBack={handleClose} />
      </Box>
      {overLay ? (
        <Box h="100vh" w="100vw" zIndex="1" bg="#fff" pos="fixed" top="0px" left="0px"></Box>
      ) : (
        ''
      )}
    </Container>
  );
};
