import { Box, Switch, FormControl, FormLabel } from '@chakra-ui/react';
import { Option, BackBtn, HeadingTypography } from '../../../../components';

export const Notification = ({ goBack }: { goBack: () => void }) => {
  return (
    <Box p={6}>
      <BackBtn handleClick={goBack} pos="absolute" />
      <HeadingTypography pos="absolute" right={6} top={6} m="0" fontSize="lg" cursor="pointer">
        Save
      </HeadingTypography>
      <HeadingTypography mb={6} mt="0" mx="0" fontSize="lg" align="center">
        Notifications
      </HeadingTypography>
      <Option icon={false}>
        <FormControl justifyContent="space-between" display="flex" alignItems="center">
          <FormLabel fontSize="sm" htmlFor="Portfolio" mb="0" cursor="pointer">
            Portfolio
          </FormLabel>
          <Switch id="Portfolio" />
        </FormControl>
      </Option>
      <HeadingTypography fontSize="sm" px={3} mb={8}>
        New incomes, overal returns cash on cash or more.
      </HeadingTypography>

      <Option icon={false}>
        <FormControl justifyContent="space-between" display="flex" alignItems="center">
          <FormLabel fontSize="sm" htmlFor="Opportunities" mb="0" cursor="pointer">
            Opportunities
          </FormLabel>
          <Switch id="Opportunities" />
        </FormControl>
      </Option>
      <HeadingTypography fontSize="sm" px={3}>
        New markets, submarkets and properties available.
      </HeadingTypography>
      <HeadingTypography fontSize="sm" px={3} mb={8}>
        News and properties added to wishlist.
      </HeadingTypography>

      <Option icon={false}>
        <FormControl justifyContent="space-between" display="flex" alignItems="center">
          <FormLabel fontSize="sm" htmlFor="Features" mb="0" cursor="pointer">
            Features and recommendations
          </FormLabel>
          <Switch id="Features" />
        </FormControl>
      </Option>
      <HeadingTypography fontSize="sm" px={3} mb={8}>
        New featured, spaces, content, annoucements and product features.
      </HeadingTypography>
    </Box>
  );
};
