import type { HeadingProps, TextProps } from '@chakra-ui/react';
import { forwardRef, Heading, Text } from '@chakra-ui/react';

export const H1 = forwardRef<HeadingProps, 'h1'>((props, ref) => (
  <Heading as="h1" size="2xl" ref={ref} {...props} />
));

export const H1i = forwardRef<HeadingProps, 'h1'>((props, ref) => (
  <Heading as="h1" m={0} size="2xl" ref={ref} {...props} />
));

export const H2 = forwardRef<HeadingProps, 'h2'>((props, ref) => (
  <Heading as="h2" size="xl" ref={ref} {...props} />
));

export const H2i = forwardRef<HeadingProps, 'h2'>((props, ref) => (
  <Heading as="h2" m={0} size="xl" ref={ref} {...props} />
));

export const H3 = forwardRef<HeadingProps, 'h3'>((props, ref) => (
  <Heading as="h3" size="lg" ref={ref} {...props} />
));

export const H3i = forwardRef<HeadingProps, 'h3'>((props, ref) => (
  <Heading as="h3" m={0} size="lg" ref={ref} {...props} />
));

export const H4 = forwardRef<HeadingProps, 'h4'>((props, ref) => (
  <Heading as="h4" size="md" ref={ref} {...props} />
));

export const H4i = forwardRef<HeadingProps, 'h4'>((props, ref) => (
  <Heading as="h4" m={0} size="md" ref={ref} {...props} />
));

export const H5 = forwardRef<HeadingProps, 'h5'>((props, ref) => (
  <Heading as="h5" size="sm" ref={ref} {...props} />
));

export const H5i = forwardRef<HeadingProps, 'h5'>((props, ref) => (
  <Heading as="h5" m={0} size="sm" ref={ref} {...props} />
));

export const H6 = forwardRef<HeadingProps, 'h6'>((props, ref) => (
  <Heading as="h6" size="xs" ref={ref} {...props} />
));

export const H6i = forwardRef<HeadingProps, 'h6'>((props, ref) => (
  <Heading as="h6" m={0} size="xs" ref={ref} {...props} />
));

export const SubTitle1 = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="subTitle1" ref={ref} {...props} />
));

export const SubTitle2 = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="subTitle2" ref={ref} {...props} />
));

export const Caption = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="caption" ref={ref} {...props} />
));

export const Overline = forwardRef<TextProps, 'span'>((props, ref) => (
  <Text textStyle="overline" ref={ref} {...props} />
));
