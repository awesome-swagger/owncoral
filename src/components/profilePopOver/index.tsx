import { Popover, PopoverTrigger, PopoverContent, PopoverArrow, Avatar } from '@chakra-ui/react';
import { ProfileContent } from '../../pages/profile';
import { useHistory } from 'react-router-dom';

export const ProfilePopOver = () => {
  const history = useHistory();
  const handleClick = (overlayNo: Number) => history.push(`/profile?overlay=${overlayNo}`);

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
