import type React from 'react';
import {
  CreateAccount,
  InvestmentExperience,
  InvestmentGoal,
  InvestmentTypes,
  Investor,
  Name,
  NetWorth,
  HouseholdIncome,
  Work,
  AllocateToRealState,
  Residency,
  Result,
  VerifyEmail,
  WelcomeCoral,
} from './steps';

type SignupRouteT = { path: string; component: React.ReactNode };

// Paths are relative to signup path (e.g. '/name' corresponds to '/signup/name', if '/signup' is the parent path)
export const signupRoutes: Array<SignupRouteT> = [
  {
    path: '/name',
    component: Name,
  },
  {
    path: '/residency',
    component: Residency,
  },
  {
    path: '/investor',
    component: Investor,
  },
  {
    path: '/create-account',
    component: CreateAccount,
  },
  {
    path: '/verify-email',
    component: VerifyEmail,
  },
  {
    path: '/welcome-coral',
    component: WelcomeCoral,
  },
  {
    path: '/investment-experience',
    component: InvestmentExperience,
  },
  {
    path: '/investment-goal',
    component: InvestmentGoal,
  },
  {
    path: '/investment-types',
    component: InvestmentTypes,
  },
  {
    path: '/networth',
    component: NetWorth,
  },
  {
    path: '/household-income',
    component: HouseholdIncome,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/allocate-to-real-state',
    component: AllocateToRealState,
  },
  {
    path: '/result',
    component: Result,
  },
];
