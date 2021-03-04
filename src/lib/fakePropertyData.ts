export type PropertyDataT = {
  name: string;
  cityLocality: string;
  stateRegion: string;
  contribution: number;
  distributionTotal: number;
  distributionLast: number;
  distributionLastDate: Date;
  uriAddress: string;
};

export const propertyData: PropertyDataT[] = [
  {
    name: '15 Berkshire St',
    cityLocality: 'Cambridge',
    stateRegion: 'MA',
    contribution: 50000,
    distributionTotal: 25000,
    distributionLast: 1131,
    distributionLastDate: new Date(2021, 1, 15),
    uriAddress: '15-Berkshire-St-Cambridge-MA',
  },
  {
    name: '221 Cambridge Ave',
    cityLocality: 'Cambridge',
    stateRegion: 'MA',
    contribution: 25000,
    distributionTotal: 2000,
    distributionLast: 497,
    distributionLastDate: new Date(2021, 1, 22),
    uriAddress: '221-Cambridge-Ave-Cambridge-MA',
  },
];
