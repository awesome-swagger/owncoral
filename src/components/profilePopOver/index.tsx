import { useContext } from 'react';
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

// TODO: fix for desktop
export const ProfilePopOver = () => {
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
        <ProfileContent />
      </PopoverContent>
    </Popover>
  );
};
