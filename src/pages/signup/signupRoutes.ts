import type React from 'react';

import {
  AllocateToRealState,
  CreateAccount,
  HouseholdIncome,
  InvestmentExperience,
  InvestmentGoal,
  InvestmentTypes,
  Investor,
  Name,
  NetWorth,
  NonResidency,
  Residency,
  Result,
  WelcomeCoral,
  Work,
} from './steps';

type SignupRouteT = {
  component: React.ElementType;
  isProtectedRoute?: boolean;
  next: Array<string>;
};

export const signupRouteGraph: Record<string, SignupRouteT> = {
  name: {
    component: Name,
    next: ['residency'],
    isProtectedRoute: false,
  },
  residency: {
    component: Residency,
    // If user is residence, then investor else non-residency
    next: ['investor', 'non-residency'],
    isProtectedRoute: false,
  },
  investor: {
    component: Investor,
    next: ['create-account'],
    isProtectedRoute: false,
  },
  'non-residency': {
    component: NonResidency,
    next: ['investor'],
    isProtectedRoute: false,
  },
  'create-account': {
    component: CreateAccount,
    next: ['welcome-coral'],
    isProtectedRoute: false,
  },
  'welcome-coral': {
    next: ['investment-experience'],
    component: WelcomeCoral,
  },
  'investment-experience': {
    next: ['investment-goal'],
    component: InvestmentExperience,
  },
  'investment-goal': {
    next: ['investment-types'],
    component: InvestmentGoal,
  },
  'investment-types': {
    next: ['network'],
    component: InvestmentTypes,
  },
  network: {
    next: ['household-income'],
    component: NetWorth,
  },
  'household-income': {
    next: ['work'],
    component: HouseholdIncome,
  },
  work: {
    next: ['allocate-to-real-state'],
    component: Work,
  },
  'allocate-to-real-state': {
    next: ['result'],
    component: AllocateToRealState,
  },
  result: {
    next: [],
    component: Result,
  },
};
