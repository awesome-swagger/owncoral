/* eslint-disable import/no-duplicates */
import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import type React from 'react';
/* eslint-enable import/no-duplicates */
import type { AdminPanelUserInfoT } from '../../shared-fullstack/types';
import { Box, Center, Heading, Select, Spinner, Text } from '@chakra-ui/react';

type AdminPanelPropsT = {
  selectedUser: string | null;
  setSelectedUser: Dispatch<SetStateAction<string | null>>;
  userList: AdminPanelUserInfoT[] | null;
  isLoading: boolean;
};
const AdminPanel: React.FC<AdminPanelPropsT> = ({
  isLoading,
  selectedUser,
  setSelectedUser,
  userList,
}) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(event.target.value);
  };

  const sortedUsers = (userList || []).sort((u1, u2) =>
    (`${u1.displayName}` || '').toLowerCase().localeCompare((u2.displayName || '').toLowerCase()),
  );

  return (
    <Center>
      <Box w="360px" borderRadius="xl" border="1px solid red" p={3} m={2}>
        <Center>
          <Heading size="xs" as="h6" color="darkred">
            Admin&nbsp;
          </Heading>
          <Text textStyle="Subhead">View as User</Text>
        </Center>

        {isLoading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Select value={selectedUser || undefined} onChange={handleChange}>
            {/* TODO: fix types */}
            {sortedUsers.map(({ id, email, displayName }: { [key: string]: any }) => {
              return (
                <option key={id} value={id}>
                  {`${displayName} <${email}>`}
                </option>
              );
            })}
          </Select>
        )}
      </Box>
    </Center>
  );
};
// eslint-disable-next-line import/no-default-export
export default AdminPanel;
