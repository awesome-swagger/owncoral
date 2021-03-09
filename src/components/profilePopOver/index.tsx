import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, Avatar } from '@chakra-ui/react';
import { ProfileContent } from '../../pages/profile';

export const ProfilePopOver = () => {
  const handleClick = () => console.log('Log Out');

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Avatar mr={6} src="https://bit.ly/sage-adebayo" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <ProfileContent handleClick={handleClick} popOver={true} />
      </PopoverContent>
    </Popover>
  );
};
