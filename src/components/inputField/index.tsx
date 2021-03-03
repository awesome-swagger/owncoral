import { forwardRef } from 'react';
import { Input, useColorModeValue } from '@chakra-ui/react';
import InputMask from 'react-input-mask';

export const InputField = forwardRef((props: any, ref) => {
  const color = useColorModeValue('primary.900', 'secondary.50');
  const bgColor = useColorModeValue('#F3F3F3', 'primary.800');

  return <Input bg={bgColor} color={color} {...props} ref={ref}></Input>;
});
export const InputMaskField = forwardRef((props: any, ref) => {
  const color = useColorModeValue('primary.900', 'secondary.50');
  const bgColor = useColorModeValue('#F3F3F3', 'primary.800');

  return (
    <InputMask style={{ color: color, backgroundColor: bgColor }} {...props} ref={ref}></InputMask>
  );
});
