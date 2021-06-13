import type React from 'react';
import { Table, Tbody, Td, Text, Th, Thead, Tooltip, Tr } from '@chakra-ui/react';

import { Title2 } from '../../components/text';
import { formatFinancial } from '../../lib/financialFormatter';

type PropertyTableProps = {
  property: any;
  period: 'last' | 'total';
};

export function PropertyTable({ property, period }: PropertyTableProps): React.ReactElement {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th />
          <Th isNumeric>Actual</Th>
          <Th isNumeric>Planned</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td textStyle="Headline">Monthly Distributions</Td>
          <Td isNumeric>
            $
            {formatFinancial(
              period === 'last'
                ? property.distributionLastActual
                : property.distributionTotalActual,
            )}
          </Td>
          <Td isNumeric>
            $
            {formatFinancial(
              period === 'last'
                ? property.distributionLastPlanned
                : property.distributionTotalPlanned,
            )}
          </Td>
        </Tr>
        <Tr>
          <Td paddingBottom={0} colSpan={3}>
            <Text textStyle="Body2">Pro Rata</Text>
          </Td>
        </Tr>
        <Tr>
          <Td textStyle="Headline">Gross Rental Income</Td>
          <Td isNumeric>${formatFinancial(period === 'last' ? 0 : 0)}</Td>
          <Td isNumeric>${formatFinancial(period === 'last' ? 0 : 0)}</Td>
        </Tr>
        <Tr>
          <Td textStyle="Headline">Operating Expenses</Td>
          <Td isNumeric>${formatFinancial(period === 'last' ? 0 : 0)}</Td>
          <Td isNumeric>${formatFinancial(period === 'last' ? 0 : 0)}</Td>
        </Tr>
        <Tr>
          <Td colSpan={3} />
        </Tr>
        <Tr>
          <Td textStyle="Headline">
            <Tooltip label="Based on NOI/Cap rate" aria-label="A tooltip">
              Fair Market Value of Ownership
            </Tooltip>
          </Td>
          <Td isNumeric>
            <Tooltip label="updated 2/7/2021" aria-label="A tooltip">
              <Title2 colorScheme="primary" variant="colored">
                ${formatFinancial(property.markedValueActual)}
              </Title2>
            </Tooltip>
          </Td>
          <Td isNumeric>${formatFinancial(property.markedValuePlanned)}</Td>
        </Tr>
      </Tbody>
    </Table>
  );
}
