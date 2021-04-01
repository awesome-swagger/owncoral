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

// Paths are relative to flow's path (e.g. '/phone-number' corresponds to 'investment-profile/phone-number')
export const investmentProfileRoutes: Array<loginRouteType> = [
  {
    path: '/information-missing',
    Component: InformationMissing,
  },
  {
    path: '/residental-address',
    Component: ResidentialAddress,
  },
  {
    path: '/phone-number',
    Component: PhoneNumber,
  },
  {
    path: '/ssn-or-ein',
    Component: SsnOrEin,
  },
  {
    path: '/invest',
    Component: Invest,
  },
  {
    path: '/entity-name',
    Component: EntityName,
  },
  {
    path: '/entity-type',
    Component: EntityType,
  },
  {
    path: '/tax-classification',
    Component: TaxClassification,
  },
  {
    path: '/ein',
    Component: Ein,
  },
  {
    path: '/industry',
    Component: Industry,
  },
  {
    path: '/date-of-formation',
    Component: DateOfFormation,
  },

  {
    path: '/jurisdiction-registration',
    Component: JurisdictionRegistration,
  },
  {
    path: '/date-of-registration',
    Component: DateOfRegistration,
  },
  {
    path: '/certificate-of-registration',
    Component: CertificateOfRegistration,
  },
  {
    path: '/entity-address',
    Component: EntityAddress,
  },
  {
    path: '/entity-phone-number',
    Component: EntityPhoneNumber,
  },
  {
    path: '/result',
    Component: Result,
  },
];
