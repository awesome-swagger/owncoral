import { InformationMissing } from './steps/InformationMissing';
import { ResidentialAddress } from './steps/ResidentialAddress';
import { PhoneNumber } from './steps/PhoneNumber';
import { SsnOrEin } from './steps/SsnOrEin';
import { Invest } from './steps/Invest';
import { EntityName } from './steps/EntityName';
import { EntityType } from './steps/EntityType';
import { TaxClasification } from './steps/TaxClasification';
import { Ein } from './steps/Ein';
import { Industry } from './steps/Industry';
import { DateOfFormation } from './steps/DateOfFormation';
import { JurisdictionRegistration } from './steps/JurisdictionRegistration';
import { DateOfRegistration } from './steps/DateOfRegistration';
import { CertificateOfRegistration } from './steps/CertificateOfRegistration';
import { EntityAddress } from './steps/EntityAddress';
import { EntityPhoneNumber } from './steps/EntityPhoneNumber';
import { Result } from './steps/Result';

type loginRouteType = { id: number; path: string; Component: any };

export const loginRoutes: Array<loginRouteType> = [
  {
    id: 1,
    path: '/login/information-missing',
    Component: InformationMissing,
  },
  {
    id: 2,
    path: '/login/residental-address',
    Component: ResidentialAddress,
  },
  {
    id: 3,
    path: '/login/phonenumber',
    Component: PhoneNumber,
  },
  {
    id: 4,
    path: '/login/ssn-or-ein',
    Component: SsnOrEin,
  },
  {
    id: 5,
    path: '/login/invest',
    Component: Invest,
  },
  {
    id: 6,
    path: '/login/entity-name',
    Component: EntityName,
  },
  {
    id: 7,

    path: '/login/entity-type',
    Component: EntityType,
  },
  {
    id: 8,
    path: '/login/tax-clasification',
    Component: TaxClasification,
  },
  {
    id: 9,
    path: '/login/ein',
    Component: Ein,
  },
  {
    id: 10,
    path: '/login/industry',
    Component: Industry,
  },
  {
    id: 11,
    path: '/login/date-of-formation',
    Component: DateOfFormation,
  },

  {
    id: 12,
    path: '/login/jurisdiction-registration',
    Component: JurisdictionRegistration,
  },
  {
    id: 13,
    path: '/login/date-of-registration',
    Component: DateOfRegistration,
  },
  {
    id: 14,
    path: '/login/certificate-of-registration',
    Component: CertificateOfRegistration,
  },
  {
    id: 15,
    path: '/login/entity-address',
    Component: EntityAddress,
  },
  {
    id: 16,
    path: '/login/entity-phonenumber',
    Component: EntityPhoneNumber,
  },
  {
    id: 17,
    path: '/login/result',
    Component: Result,
  },
];
