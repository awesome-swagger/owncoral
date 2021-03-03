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
    path: '/investment-profile/information-missing',
    Component: InformationMissing,
  },
  {
    path: '/investment-profile/residental-address',
    Component: ResidentialAddress,
  },
  {
    path: '/investment-profile/phonenumber',
    Component: PhoneNumber,
  },
  {
    path: '/investment-profile/ssn-or-ein',
    Component: SsnOrEin,
  },
  {
    path: '/investment-profile/invest',
    Component: Invest,
  },
  {
    path: '/investment-profile/entity-name',
    Component: EntityName,
  },
  {
    path: '/investment-profile/entity-type',
    Component: EntityType,
  },
  {
    path: '/investment-profile/tax-clasification',
    Component: TaxClasification,
  },
  {
    path: '/investment-profile/ein',
    Component: Ein,
  },
  {
    path: '/investment-profile/industry',
    Component: Industry,
  },
  {
    path: '/investment-profile/date-of-formation',
    Component: DateOfFormation,
  },

  {
    path: '/investment-profile/jurisdiction-registration',
    Component: JurisdictionRegistration,
  },
  {
    path: '/investment-profile/date-of-registration',
    Component: DateOfRegistration,
  },
  {
    path: '/investment-profile/certificate-of-registration',
    Component: CertificateOfRegistration,
  },
  {
    path: '/investment-profile/entity-address',
    Component: EntityAddress,
  },
  {
    path: '/investment-profile/entity-phonenumber',
    Component: EntityPhoneNumber,
  },
  {
    path: '/investment-profile/result',
    Component: Result,
  },
];
