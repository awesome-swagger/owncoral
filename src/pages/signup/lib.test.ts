import type { SignupInfoT } from '../../shared-fullstack/types';
import { InvestmentGoal, InvestmentType } from '../../shared-fullstack/validators';
import { assert } from 'chai';

import { scoreSignup } from './lib';

describe('addressToUrlFragment', () => {
  it('trivial null', () => {
    assert.equal(scoreSignup(undefined), null);
  });
  it('null on missing data', () => {
    assert.equal(
      scoreSignup(({
        incomeAnnual: null,
        investmentExperienceYrs: null,
        investmentGoals: null,
        investmentTypes: [],
        netWorth: null,
      } as any) as SignupInfoT),
      null,
    );
  });
  it('example 1', () => {
    assert.equal(
      scoreSignup(({
        netWorth: 2e6,
        incomeAnnual: 350e3,
        investmentExperienceYrs: 7,
        investmentTypes: [InvestmentType.enum.REAL_ESTATE, InvestmentType.enum.STARTUPS],
        investmentGoals: [InvestmentGoal.enum.INCOME, InvestmentGoal.enum.TAX_EFFICIENCY],
      } as any) as SignupInfoT),
      20,
    );
  });
  it('example 2', () => {
    assert.equal(
      scoreSignup(({
        netWorth: 700e3,
        incomeAnnual: 240e3,
        investmentExperienceYrs: 3,
        investmentTypes: [InvestmentType.enum.STOCKS, InvestmentType.enum.BONDS],
        investmentGoals: [],
      } as any) as SignupInfoT),
      8,
    );
  });
  it('example 3', () => {
    assert.equal(
      scoreSignup(({
        netWorth: 15e6,
        incomeAnnual: 750e3,
        investmentExperienceYrs: 1,
        investmentTypes: [InvestmentType.enum.STOCKS, InvestmentType.enum.BONDS],
        investmentGoals: [],
      } as any) as SignupInfoT),
      10,
    );
  });
});
