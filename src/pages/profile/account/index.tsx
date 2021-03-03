import { Box } from '@chakra-ui/react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaRegDotCircle, BsPerson } from 'react-icons/all';
import { Option, HeadingTypography } from '../../../components';

export const Account = ({ handleClick }: { handleClick: (x: Number) => void }) => {
  return (
    <Box mt={8}>
      <HeadingTypography fontSize="md">Account</HeadingTypography>
      <Option onClick={() => handleClick(1)}>
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
      <Option onClick={() => handleClick(2)}>
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
      <Option onClick={() => handleClick(3)}>
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
  );
};
