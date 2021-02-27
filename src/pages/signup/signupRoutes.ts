import {
  BirthDate,
  CreateAccount,
  InvestmentExperience,
  InvestmentGoal,
  Investor,
  Name,
  NetWorth,
  Residency,
  Result,
  VerifyEmail,
  WelcomeCoral,
} from './steps';

type SignupRouteT = { path: string; component: any };

export const signupRoutes: Array<SignupRouteT> = [
  {
    path: '/signup/residency',
    component: Residency,
  },
  {
    path: '/signup/name',
    component: Name,
  },
  {
    path: '/signup/birthdate',
    component: BirthDate,
  },
  {
    path: '/signup/investor',
    component: Investor,
  },
  {
    path: '/signup/create-account',
    component: CreateAccount,
  },
  {
    path: '/signup/verify-email',
    component: VerifyEmail,
  },
  {
    path: '/signup/welcome-coral',
    component: WelcomeCoral,
  },
  {
    path: '/signup/investment-goal',
    component: InvestmentGoal,
  },
  {
    path: '/signup/networth',
    component: NetWorth,
  },
  {
    path: '/signup/investment-experience',
    component: InvestmentExperience,
  },
  {
    path: '/signup/result',
    component: Result,
  },
];
