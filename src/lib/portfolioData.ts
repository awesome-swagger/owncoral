export type PropertyDataT = {
  name: string;
  cityLocality: string;
  stateRegion: string;
  uriAddress: string;
  initialInvestment: number;
  monthlyDistribution: number;
  totalDistribution: number;
  totalContribution: number;

  contribution: number;
  contributionDate: Date;
  distributionTotalActual: number;
  distributionTotalPlanned: number;
  distributionLastActual: number;
  distributionLastPlanned: number;
  distributionLastDate: Date;
  markedValueActual: number;
  markedValuePlanned: number;
};
export const DummyData = {
  cityLocality: 'Cambridge',
  stateRegion: 'Greater Boston Area',
  uriAddress: '2972 Westheimer Rd.',
  propertyMeasure: '5,000 sq ft · 6 units',
  propertyPrice: '$20k',
  totalDistribution: '$1,060',
  lastMonthDistribution: '$124',
  monthlyDistribution: '$124',
  totalInvest: '$24,800',
  capitalReturn: '1.5%',
  cashReturn: '4.5%',
  returnRate: '3.10%',
  propertyLocation:
    "3 Linden is in the heart of Somerville, an emerging biotech hub. It's minutes from the new Union Square biotech hub, which is in development, and the Union Square Greenline T Station (estimated to be complete at the end of this year)",
};
