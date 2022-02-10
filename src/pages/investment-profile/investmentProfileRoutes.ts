import type React from 'react';

import {
  AccountNumber,
  AccreditedEntity,
  // CertificateOfRegistration,
  Custodian,
  DateOfBirth,
  // DateOfFormation,
  Ein,
  EntityAddress,
  EntityName,
  // EntityPhoneNumber,
  EntityType,
  // Industry,
  InformationMissing,
  Invest,
  // JurisdictionRegistration,
  PhoneNumber,
  ResidentialAddress,
  Result,
  SsnOrEin,
} from './steps';

type InvestmentProfileRouteType = {component: React.ElementType; next: Array<string>};

export const investmentProfileRouteGraph: Record<string, InvestmentProfileRouteType> = {
  '/information-missing': {
    component: InformationMissing,
    next: ['/date-of-birth']
  },
  '/date-of-birth': {
    component: DateOfBirth,
    next: ['/residental-address']
  },
  '/residental-address': {
    component: ResidentialAddress,
    next: ['/phone-number']
  },
  '/phone-number': {
    component: PhoneNumber,
    next: ['/ein']
  },
  '/ein': {
    component: Ein,
    next: ['/invest']
  },
  '/invest': {
    component: Invest,
    next: ['/entity-name','/result']
  },
  '/entity-name': {
    component: EntityName,
    next: ['/entity-type']
  },
  '/entity-type': {
    component: EntityType,
    next: ['/entity-accredited', '/ira-custodian']
  },
  '/ira-custodian': {
    component: Custodian,
    next: ['/ira-account-number']
  },
  '/ira-account-number': {
    component: AccountNumber,
    next: ['/entity-accredited']
  },
  '/entity-accredited': {
    component: AccreditedEntity,
    next: ['/ssn-or-ein']
  },
  '/ssn-or-ein': {
    component: SsnOrEin,
    next: ['/entity-address']
  },
  '/entity-address': {
    component: EntityAddress,
    next: ['/result']
  },
  /*
  '/industry': {
    component: Industry,
    next: ['/date-of-formation']
  },
  '/date-of-formation': {
    component: DateOfFormation,
    next: ['/jurisdiction-registration']
  },
  '/jurisdiction-registration': {
    component: JurisdictionRegistration,
    next: ['/date-of-registration']
  },
  '/certificate-of-registration': {
    component: CertificateOfRegistration,
    next: ['/entity-address']
  },
  '/entity-phone-number': {
    component: EntityPhoneNumber,
    next: ['/result']
  },
  */
  '/result': {
    component: Result,
    next: []
  },
};
