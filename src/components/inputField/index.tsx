import { Input, useColorModeValue } from '@chakra-ui/react';
import InputMask from 'react-input-mask';

export const InputField = (props: any) => {
  const color = useColorModeValue('primary.900', 'secondary.50');
  const bgColor = useColorModeValue('#F3F3F3', 'primary.800');

  return <Input bg={bgColor} color={color} {...props}></Input>;
};
export const InputMaskField = (props: any) => {
  const color = useColorModeValue('primary.900', 'secondary.50');
  const bgColor = useColorModeValue('#F3F3F3', 'primary.800');

  return <InputMask style={{ color: color, backgroundColor: bgColor }} {...props}></InputMask>;
};
