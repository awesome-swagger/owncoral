import { useState, useRef, useLayoutEffect } from 'react';
import { Container } from '../../components';
import { Center, Avatar, AvatarBadge, Box } from '@chakra-ui/react';
import theme from '../../theme';
import { Option, HeadingTypography } from '../../components';
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
      <HeadingTypography m="0" fontSize={6} align="center">
        John Doe
      </HeadingTypography>
      <HeadingTypography m="0" fontSize="md" align="center">
        jhondoe@gmail.com
      </HeadingTypography>
      <Box mt={8}>
        <HeadingTypography fontSize="md">Account</HeadingTypography>
        <Option onClick={handleClick}>
          <BsPerson
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Personal Inforamtion
          </HeadingTypography>
        </Option>
        <Option>
          <FaRegDotCircle
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Investment Goal
          </HeadingTypography>
        </Option>
        <Option>
          <IoMdNotificationsOutline
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Notifications
          </HeadingTypography>
        </Option>
      </Box>
      <Box mt={8}>
        <HeadingTypography fontSize="md">Help</HeadingTypography>
        <Option>
          <BsCircle
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            About Coral
          </HeadingTypography>
        </Option>
        <Option>
          <BsQuestionCircle
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            FAQS
          </HeadingTypography>
        </Option>
        <Option>
          <BiSupport
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Support
          </HeadingTypography>
        </Option>
      </Box>
      <Box mt={8}>
        <HeadingTypography fontSize="md">Legal</HeadingTypography>
        <Option>
          <ImFileEmpty
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Terms & Conditions
          </HeadingTypography>
        </Option>
        <Option>
          <ImFileEmpty
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Privacy Policy
          </HeadingTypography>
        </Option>
      </Box>
      <Box mt={8}>
        <Option>
          <FiLogOut
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Log out
          </HeadingTypography>
        </Option>
        <Option>
          <RiDeleteBin6Line
            style={{
              height: '1.25rem',
              width: '1.25rem',
              marginRight: '0.5rem',
            }}
          />
          <HeadingTypography fontSize="sm" m="0">
            Delete Account
          </HeadingTypography>
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
