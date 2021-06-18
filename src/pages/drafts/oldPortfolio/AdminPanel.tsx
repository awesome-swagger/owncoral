/* eslint-disable import/no-duplicates */
import type { ChangeEvent, FC } from 'react';
/* eslint-enable import/no-duplicates */
import { Box, Center, Heading, Select, Spinner, Text } from '@chakra-ui/react';

type AdminPanelPropsT = {
  selectedUser: any;
  setSelectedUser: any;
  userList: any;
  isAdminLoading: boolean;
};
const AdminPanel: FC<AdminPanelPropsT> = ({
  isAdminLoading,
  selectedUser,
  setSelectedUser,
  userList,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  return (
    <Center>
      <Box w="360px" borderRadius="xl" border="1px solid red" p={3} m={2}>
        <Center>
          <Heading size="xs" as="h6" color="darkred">
            Admin&nbsp;
          </Heading>
          <Text textStyle="Subhead">View as User</Text>
        </Center>

        {isAdminLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Select value={selectedUser || undefined} onChange={handleChange}>
            {/* TODO: fix types */}
            {(userList || []).map(({ id, email, displayName }: { [key: string]: any }) => (
              <option key={id} value={id}>
                {`${displayName} <${email}>`}
              </option>
            ))}
          </Select>
        )}
      </Box>
    </Center>
  );
};
// eslint-disable-next-line import/no-default-export
export default AdminPanel;
