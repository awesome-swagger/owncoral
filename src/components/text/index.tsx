import type { HeadingProps, TextProps } from '@chakra-ui/react';
import { forwardRef, Heading, Text } from '@chakra-ui/react';

export const XXLargeTitle = forwardRef<HeadingProps, 'h1'>((props, ref) => (
  <Heading as="h1" size="2xl" ref={ref} {...props} />
));

export const XLargeTitle = forwardRef<HeadingProps, 'h2'>((props, ref) => (
  <Heading as="h2" size="xl" ref={ref} {...props} />
));

export const LargeTitle = forwardRef<HeadingProps, 'h3'>((props, ref) => (
  <Heading as="h3" size="lg" ref={ref} {...props} />
));

export const Title1 = forwardRef<HeadingProps, 'h4'>((props, ref) => (
  <Heading as="h4" size="md" ref={ref} {...props} />
));

export const Title2 = forwardRef<HeadingProps, 'h5'>((props, ref) => (
  <Heading as="h5" size="sm" ref={ref} {...props} />
));

export const Headline = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="Headline" ref={ref} {...props} />
));

export const Subhead = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="Subhead" ref={ref} {...props} />
));

export const Caption1 = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="Caption1" ref={ref} {...props} />
));

export const Meta = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="Meta" ref={ref} {...props} />
));

export const Overline = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="Overline" colorScheme="gray" variant="colored" ref={ref} {...props} />
));
