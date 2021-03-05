export type PropertyDataT = {
  name: string;
  cityLocality: string;
  stateRegion: string;
  contribution: number;
  contributionDate: Date;
  distributionTotalActual: number;
  distributionTotalPlanned: number;
  distributionLastActual: number;
  distributionLastPlanned: number;
  distributionLastDate: Date;
  markedValueActual: number;
  markedValuePlanned: number;
  uriAddress: string;
};

export const propertyData: PropertyDataT[] = [
  {
    name: '15 Berkshire St',
    cityLocality: 'Cambridge',
    stateRegion: 'MA',
    contribution: 50000,
    contributionDate: new Date(2020, 4, 15),
    distributionTotalActual: 25000,
    distributionTotalPlanned: 23200,
    distributionLastActual: 1131,
    distributionLastPlanned: 1070,
    distributionLastDate: new Date(2021, 1, 15),
    markedValueActual: 61231,
    markedValuePlanned: 62813,
    uriAddress: '15-Berkshire-St-Cambridge-MA',
  },
  {
    name: '221 Cambridge Ave',
    cityLocality: 'Cambridge',
    stateRegion: 'MA',
    contribution: 25000,
    contributionDate: new Date(2020, 8, 2),
    distributionTotalActual: 2000,
    distributionTotalPlanned: 2157,
    distributionLastActual: 497,
    distributionLastPlanned: 581,
    distributionLastDate: new Date(2021, 1, 22),
    markedValueActual: 26231,
    markedValuePlanned: 27912,
    uriAddress: '221-Cambridge-Ave-Cambridge-MA',
  },
];
