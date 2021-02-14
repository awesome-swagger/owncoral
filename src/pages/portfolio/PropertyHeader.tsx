/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react/macro';
import { RiPieChartLine } from 'react-icons/ri';
import { TSubTitle1, TSubTitle2 } from '@app/client-web/src/components/shared/Typography';
import { roundFinancial } from '@app/client-web/src/Utils';
import { MapPin } from 'react-feather';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import React from 'react';
import styled from '@emotion/styled/macro';

const FBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0.6em 0;
`;

type PropertyHeaderProps = {
  propertyData: {
    address: string;
    city: string;
    mark: number;
    distribution: number;
  };
};
export const PropertyHeader: React.FC<PropertyHeaderProps> = ({ propertyData }) => {
  return (
    <div css={{ padding: '1em 1.6em' }}>
      <FBox>
        <h6 css={{ margin: 0 }}>{propertyData.address}</h6>

        <span>
          <RiPieChartLine size={20} />
          &nbsp;<TSubTitle2>{'$' + roundFinancial(propertyData.mark)}</TSubTitle2>
        </span>
      </FBox>

      <FBox>
        <span>
          <MapPin size={18} />
          &nbsp;<TSubTitle1>{propertyData.city}</TSubTitle1>
        </span>
        <span>
          <FaRegMoneyBillAlt size={23} />
          &nbsp;<TSubTitle2>{'$' + roundFinancial(propertyData.distribution)}</TSubTitle2>
        </span>
      </FBox>
    </div>
  );
};
