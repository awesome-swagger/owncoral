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

type loginRouteType = { path: string; Component: any };

export const loginRoutes: Array<loginRouteType> = [
  {
    path: '/login/information-missing',
    Component: InformationMissing,
  },
  {
    path: '/login/residental-address',
    Component: ResidentialAddress,
  },
  {
    path: '/login/phonenumber',
    Component: PhoneNumber,
  },
  {
    path: '/login/ssn-or-ein',
    Component: SsnOrEin,
  },
  {
    path: '/login/invest',
    Component: Invest,
  },
  {
    path: '/login/entity-name',
    Component: EntityName,
  },
  {
    path: '/login/entity-type',
    Component: EntityType,
  },
  {
    path: '/login/tax-clasification',
    Component: TaxClasification,
  },
  {
    path: '/login/ein',
    Component: Ein,
  },
  {
    path: '/login/industry',
    Component: Industry,
  },
  {
    path: '/login/date-of-formation',
    Component: DateOfFormation,
  },

  {
    path: '/login/jurisdiction-registration',
    Component: JurisdictionRegistration,
  },
  {
    path: '/login/date-of-registration',
    Component: DateOfRegistration,
  },
  {
    path: '/login/certificate-of-registration',
    Component: CertificateOfRegistration,
  },
  {
    path: '/login/entity-address',
    Component: EntityAddress,
  },
  {
    path: '/login/entity-phonenumber',
    Component: EntityPhoneNumber,
  },
  {
    path: '/login/result',
    Component: Result,
  },
];
