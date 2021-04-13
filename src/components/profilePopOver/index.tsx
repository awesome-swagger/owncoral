import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Avatar,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';

import { ProfileContent } from '../../pages/profile';
import { UserContext } from '../../userContext';

export const ProfilePopOver = () => {
  const history = useHistory();
  const handleClick = (overlayNo: Number) => history.push(`/profile?overlay=${overlayNo}`);
  const [user] = useContext(UserContext);

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <IconButton
          aria-label="User menu"
          isRound={true}
          _focus={{ boxShadow: 0 }}
          icon={<Avatar name={[user?.legalFirst, user?.legalLast].join(' ')} />}
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <ProfileContent handleClick={handleClick} popOver={true} />
      </PopoverContent>
    </Popover>
  );
};
