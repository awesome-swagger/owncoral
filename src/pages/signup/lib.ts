/**
 * Scores a user's signup data to see whether they automatically qualify
 * for the platform.
 *
 * Reference: https://linear.app/franklin-coral/issue/FC-204/signup-onboarding-logic-and-scoring
 */

import type { SignupInfoT } from '../../shared-fullstack/types';
import { InvestmentGoal, InvestmentType } from '../../shared-fullstack/validators';

// eslint-disable-next-line complexity
export const scoreSignup = (signupInfo: SignupInfoT | undefined): number | null => {
  if (signupInfo === undefined) return null;

  const {
    netWorth,
    incomeAnnual,
    investmentExperienceYrs,
    investmentTypes,
    investmentGoals,
  } = signupInfo;

  if (
    netWorth === null ||
    incomeAnnual === null ||
    investmentExperienceYrs === null ||
    investmentTypes === null ||
    investmentGoals === null
  ) {
    return null;
  }

  const netWorthScore =
    netWorth < 500e3 ? 0 : netWorth < 1e6 ? 2 : netWorth < 5e6 ? 5 : netWorth < 10e6 ? 6 : 7;

  const incomeScore =
    incomeAnnual < 200e3 ? 0 : incomeAnnual < 300e3 ? 2 : incomeAnnual < 500e3 ? 3 : 4;

  const investmentExperienceYrsScore =
    investmentExperienceYrs < 2
      ? 0
      : investmentExperienceYrs < 5
      ? 2
      : investmentExperienceYrs < 10
      ? 3
      : investmentExperienceYrs < 20
      ? 4
      : 5;

  const investmentTypesDict = Object.fromEntries(investmentTypes.map((k) => [k, true]));
  const investmentTypesScore =
    (InvestmentType.enum.STOCKS in investmentTypesDict ? 1 : 0) +
    (InvestmentType.enum.BONDS in investmentTypesDict ? 1 : 0) +
    (InvestmentType.enum.REAL_ESTATE in investmentTypesDict ? 4 : 0) +
    (InvestmentType.enum.STARTUPS in investmentTypesDict ? 3 : 0) +
    (InvestmentType.enum.HEDGE_FUNDS in investmentTypesDict ? 3 : 0) +
    (InvestmentType.enum.PRIVATE_EQUITY in investmentTypesDict ? 3 : 0) +
    (InvestmentType.enum.OTHER in investmentTypesDict ? 3 : 0);

  const investmentGoalsDict = Object.fromEntries(investmentGoals.map((k) => [k, true]));
  const investmentGoalsScore =
    (InvestmentGoal.enum.DIVERSIFICATION in investmentGoalsDict ? 1 : 0) +
    (InvestmentGoal.enum.INCOME in investmentGoalsDict ? 1 : 0) +
    (InvestmentGoal.enum.RETURNS in investmentGoalsDict ? 1 : 0) +
    (InvestmentGoal.enum.TAX_EFFICIENCY in investmentGoalsDict ? 1 : 0) +
    (InvestmentGoal.enum.NOT_SURE in investmentGoalsDict ? 0 : 0);

  return (
    Math.min(netWorthScore + incomeScore, 8) +
    investmentExperienceYrsScore +
    investmentTypesScore +
    investmentGoalsScore
    // investmentSize is excluded
  );
};
