import { CertificateOfRegistration } from './steps/CertificateOfRegistration';
import { DateOfFormation } from './steps/DateOfFormation';
import { DateOfRegistration } from './steps/DateOfRegistration';
import { Ein } from './steps/Ein';
import { EntityAddress } from './steps/EntityAddress';
import { EntityName } from './steps/EntityName';
import { EntityPhoneNumber } from './steps/EntityPhoneNumber';
import { EntityType } from './steps/EntityType';
import { Industry } from './steps/Industry';
import { InformationMissing } from './steps/InformationMissing';
import { Invest } from './steps/Invest';
import { JurisdictionRegistration } from './steps/JurisdictionRegistration';
import { PhoneNumber } from './steps/PhoneNumber';
import { ResidentialAddress } from './steps/ResidentialAddress';
import { Result } from './steps/Result';
import { SsnOrEin } from './steps/SsnOrEin';
import { TaxClassification } from './steps/TaxClassification';

type loginRouteType = { path: string; Component: any };

export const investmentProfileRoutes: Array<loginRouteType> = [
  {
    path: '/investment-profile/information-missing',
    Component: InformationMissing,
  },
  {
    path: '/investment-profile/residental-address',
    Component: ResidentialAddress,
  },
  {
    path: '/investment-profile/phone-number',
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
    path: '/investment-profile/tax-classification',
    Component: TaxClassification,
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
    path: '/investment-profile/entity-phone-number',
    Component: EntityPhoneNumber,
  },
  {
    path: '/investment-profile/result',
    Component: Result,
  },
];
