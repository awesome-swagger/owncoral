import {
  Residency,
  Name,
  BirthDate,
  Investor,
  CreateAccount,
  VerifyEmail,
  WelcomeCoral,
  InvestmentGoal,
  NetWorth,
  InvestmentExperience,
  Result,
} from '../../src/pages/signup/steps';

type signupRouteType = { id: number; path: string; Component: any };

export const signupRoutes: Array<signupRouteType> = [
  {
    id: 1,
    path: '/signup/residency',
    Component: Residency,
  },
  {
    id: 2,
    path: '/signup/name',
    Component: Name,
  },
  {
    id: 3,
    path: '/signup/birthdate',
    Component: BirthDate,
  },
  {
    id: 4,
    path: '/signup/investor',
    Component: Investor,
  },
  {
    id: 5,
    path: '/signup/createaccount',
    Component: CreateAccount,
  },
  {
    id: 6,
    path: '/signup/verifyemail',
    Component: VerifyEmail,
  },
  {
    id: 7,

    path: '/signup/welcomecoral',
    Component: WelcomeCoral,
  },
  {
    id: 8,
    path: '/signup/investmentgoal',
    Component: InvestmentGoal,
  },
  {
    id: 9,
    path: '/signup/networth',
    Component: NetWorth,
  },
  {
    id: 10,
    path: '/signup/investmentexperience',
    Component: InvestmentExperience,
  },
  {
    id: 11,
    path: '/signup/result',
    Component: Result,
  },
];
