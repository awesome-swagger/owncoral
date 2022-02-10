import type { ReactElement } from 'react';

import { CashFlowData } from '../pages/academy/courses/cashFlow/data';
import {
  FinancingWithCommercialData
} from '../pages/academy/courses/financingWithCommercial/data';
import {
  RealizingAppreciationData
} from '../pages/academy/courses/realizingAppreciation/data';
import {
  OwnershipStructureData
} from '../pages/academy/courses/ownershipStructure/data';

import Listings from '../assets/crash-course/Listings.png';
import RealStateFundamentals from '../assets/crash-course/RealStateFundamentals.png';
import Sources from '../assets/crash-course/Sources.png';
import Valuing from '../assets/crash-course/Valuing.png';

const listingsName = 'Understanding Coral listings';
const realStateFundamentalsName = 'Real estate fundamentals'
const sourcesName = 'Sources of wealth';
const valuingName = 'Valuing real estate';

export const COURSE_CASH_FLOW_URL = '/unit/cash-flow';
export const FINANCING_WITH_COMMERCIAL_URL = '/unit/financing-with-commercial-loans';
export const OWNERSHIP_STRUCTURE_URL = '/unit/ownership-structure';
export const REALIZING_APPRECIATION_URL = '/unit/realizing-appreciation-without-selling';

const {
  flowStartData,
  cashFlowData,
  flowEndData
} = CashFlowData(COURSE_CASH_FLOW_URL, listingsName);

const {
  financingStartData,
  financingWithCommercialData,
  financingEndData
} = FinancingWithCommercialData(FINANCING_WITH_COMMERCIAL_URL, listingsName);

const {
  ownershipStartData,
  ownershipStructureData,
  ownershipEndData
} = OwnershipStructureData(OWNERSHIP_STRUCTURE_URL, listingsName);

const {
  realizingStartData,
  realizingAppreciationData,
  realizingEndData
} = RealizingAppreciationData(REALIZING_APPRECIATION_URL, listingsName);

export enum CourseEnum {
  CASHFLOW = "CASHFLOW",
  FINANCING = "FINANCING",
  OWNERSHIP_STRUCTURE = "OWNERSHIP_STRUCTURE",
  REALIZING_APPRECIATION = "REALIZING_APPRECIATION",
}

const FLOW_DATA: Record<CourseEnum, ReactElement[]> = {
  [CourseEnum.CASHFLOW]: cashFlowData,
  [CourseEnum.FINANCING]: financingWithCommercialData,
  [CourseEnum.OWNERSHIP_STRUCTURE]: ownershipStructureData,
  [CourseEnum.REALIZING_APPRECIATION]: realizingAppreciationData
}
const FLOW_START_DATA: Record<CourseEnum, ReactElement> = {
  [CourseEnum.CASHFLOW]: flowStartData,
  [CourseEnum.FINANCING]: financingStartData,
  [CourseEnum.OWNERSHIP_STRUCTURE]: ownershipStartData,
  [CourseEnum.REALIZING_APPRECIATION]: realizingStartData
}
const FLOW_END_DATA: Record<CourseEnum, ReactElement> = {
  [CourseEnum.CASHFLOW]: flowEndData,
  [CourseEnum.FINANCING]: financingEndData,
  [CourseEnum.OWNERSHIP_STRUCTURE]: ownershipEndData,
  [CourseEnum.REALIZING_APPRECIATION]: realizingEndData
}

export const getFlowData = (index: string, courseKey: CourseEnum) => {
  const flowDataArray = Object.fromEntries([
    ...FLOW_DATA[courseKey].map((data, idx) => [idx+1, data]),
    ["get-started", FLOW_START_DATA[courseKey]],
    ["back-to-property", FLOW_END_DATA[courseKey]]
  ]);

  return flowDataArray[index || 'get-started'];
}

export type CourseT = {
  name: string;
  image: string;
  isComingSoon?: boolean;
  lessons: { title: string; slides: number; url?: string; hideInProd?: boolean }[];
}

export const Data: CourseT[] = [
  {
    name: listingsName,
    image: Listings,
    isComingSoon: false,
    lessons: [
      {
        title: 'Investor cash flow',
        slides: cashFlowData.length,
        url: COURSE_CASH_FLOW_URL
      },
      {
        title: 'Realizing appreciation without selling',
        slides: realizingAppreciationData.length,
        url: REALIZING_APPRECIATION_URL,
        hideInProd: true
      },
      {
        title: 'Ownership structure',
        slides: ownershipStructureData.length,
        url: OWNERSHIP_STRUCTURE_URL,
        hideInProd: true
      },
      {
        title: 'Financing with commercial loans',
        slides: financingWithCommercialData.length,
        url: FINANCING_WITH_COMMERCIAL_URL,
        hideInProd: true
      },
      { title: 'Operating expenses', slides: 7 },
      { title: 'Capital expenditure', slides: 7 },
    ],
  },
  {
    name: realStateFundamentalsName,
    image: RealStateFundamentals,
    lessons: [
      { title: 'Basics of real estate investing', slides: 10 },
      { title: 'How to invest in real estate', slides: 5 },
      { title: 'Real estate markets and submarkets', slides: 1 },
      { title: 'What we love about multifamily real estate', slides: 3 },
    ],
  },
  {
    name: sourcesName,
    image: Sources,
    lessons: [
      { title: 'Key drivers of wealth through property ownership', slides: 7 },
      { title: 'Cash flow: generating income', slides: 7 },
      { title: 'Appreciation & inflation: increasing property value', slides: 7 },
      { title: 'Tax-Efficiency: benefiting from tax laws', slides: 7 },
      { title: 'Leverage: leverage as a force multiplier', slides: 7 },
    ],
  },
  {
    name: valuingName,
    image: Valuing,
    lessons: [
      { title: 'Key approaches to valuation', slides: 7 },
      { title: 'Income-based method: using cap rate', slides: 7 },
      { title: 'Sales-based method: using comps', slides: 7 },
      { title: 'Net asset value (NAV)', slides: 7 },
    ],
  },
];
