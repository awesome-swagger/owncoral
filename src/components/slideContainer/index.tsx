import { VStack, Box } from '@chakra-ui/react';

export const SlideContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <VStack
      justify="space-between"
      minH={{
        base: `calc(${window.innerHeight}px - 3rem)`,
        md: `calc((${window.innerHeight}px * 0.8) - 3rem)`,
      }}
      pb={{ base: 12, md: 0 }}
    >
      {children}
      <Box display={{ base: 'block', md: 'none' }} />
    </VStack>
  );
};
