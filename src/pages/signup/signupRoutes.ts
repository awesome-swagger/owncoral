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

// Paths are relative to signup path (e.g. '/name' corresponds to '/signup/name', if '/signup' is the parent path)
export const signupRoutes: Array<SignupRouteT> = [
  {
    path: '/residency',
    component: Residency,
  },
  {
    path: '/name',
    component: Name,
  },
  {
    path: '/birthdate',
    component: BirthDate,
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
    path: '/investment-goal',
    component: InvestmentGoal,
  },
  {
    path: '/networth',
    component: NetWorth,
  },
  {
    path: '/investment-experience',
    component: InvestmentExperience,
  },
  {
    path: '/result',
    component: Result,
  },
];
