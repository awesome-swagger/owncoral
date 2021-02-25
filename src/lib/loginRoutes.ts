import { InformationMissing } from '../pages/login/steps/InformationMissing';
import { ResidentialAddress } from '../pages/login/steps/ResidentialAddress';
import { PhoneNumber } from '../pages/login/steps/PhoneNumber';
import { SsnOrEin } from '../pages/login/steps/SsnOrEin';
import { Invest } from '../pages/login/steps/Invest';
import { EntityName } from '../pages/login/steps/EntityName';
import { EntityType } from '../pages/login/steps/EntityType';
import { TaxClasification } from '../pages/login/steps/TaxClasification';
import { Ein } from '../pages/login/steps/Ein';
import { Industry } from '../pages/login/steps/Industry';
import { DateOfFormation } from '../pages/login/steps/DateOfFormation';
import { JurisdictionRegistration } from '../pages/login/steps/JurisdictionRegistration';
import { DateOfRegistration } from '../pages/login/steps/DateOfRegistration';
import { CertificateOfRegistration } from '../pages/login/steps/CertificateOfRegistration';
import { EntityAddress } from '../pages/login/steps/EntityAddress';
import { EntityPhoneNumber } from '../pages/login/steps/EntityPhoneNumber';
import { Result } from '../pages/login/steps/Result';

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
