export type StatusType = 'with-customer' | 'signed' | 'saved' | 'timeout'

export interface Application {
  firstName: string
  lastName: string
  phone: string
  dob: string
  zip: string
  branch: string
  started: string
  status: string
  statusType: StatusType
  reminder?: string
  action: string
}

export const applications: Application[] = [
  { firstName: 'Robert', lastName: 'Johnson', phone: '555-392-4920', dob: '07/04/1995', zip: '15106', branch: 'Downtown Pittsburgh Branch', started: '1/24/26', status: 'Final Disclosures with Customer', statusType: 'with-customer', reminder: '3 hours until disclosures are up', action: 'See Details' },
  { firstName: 'Michael', lastName: 'Williams', phone: '555-295-9582', dob: '03/15/2001', zip: '15219', branch: 'Downtown Pittsburgh Branch', started: '12/11/25', status: 'Final Disclosures with Customer', statusType: 'with-customer', reminder: '3 hours until disclosures are up', action: 'See Details' },
  { firstName: 'David', lastName: 'Brown', phone: '555-857-2583', dob: '09/28/1988', zip: '15217', branch: 'Downtown Pittsburgh Branch', started: '11/22/25', status: 'Initial Disclosures Signed', statusType: 'signed', action: 'Continue' },
  { firstName: 'James', lastName: 'Garcia', phone: '555-285-8539', dob: '01/10/1975', zip: '15260', branch: 'Downtown Pittsburgh Branch', started: '11/15/25', status: 'Final Disclosures Signed', statusType: 'signed', action: 'Continue' },
  { firstName: 'Charles', lastName: 'Miller', phone: '555-385-2859', dob: '05/22/1999', zip: '15232', branch: 'Downtown Pittsburgh Branch', started: '10/09/25', status: 'Final Disclosures Signed', statusType: 'signed', action: 'Continue' },
  { firstName: 'William', lastName: 'Wilson', phone: '555-295-0395', dob: '12/01/1985', zip: '15222', branch: 'Downtown Pittsburgh Branch', started: '10/07/25', status: 'Saved for Later: Product Info', statusType: 'saved', action: 'Resend' },
  { firstName: '\u2013', lastName: '\u2013', phone: '555-958-2856', dob: '08/14/2003', zip: '15213', branch: 'Downtown Pittsburgh Branch', started: '9/26/25', status: 'Initial Disclosures with Customer', statusType: 'with-customer', reminder: '3 hours until disclosures are up', action: 'See Details' },
  { firstName: '\u2013', lastName: '\u2013', phone: '555-857-9573', dob: '04/08/1992', zip: '15203', branch: 'Downtown Pittsburgh Branch', started: '9/23/25', status: 'Initial Disclosures with Customer', statusType: 'with-customer', reminder: '3 hours until disclosures are up', action: 'See Details' },
  { firstName: 'Christopher', lastName: 'Anderson', phone: '555-478-3957', dob: '10/31/1979', zip: '15233', branch: 'Downtown Pittsburgh Branch', started: '9/20/25', status: 'Disclosure Timeout', statusType: 'timeout', action: 'Start New Application' },
  { firstName: 'Daniel', lastName: 'Thomas', phone: '555-239-4785', dob: '06/03/2005', zip: '15212', branch: 'Downtown Pittsburgh Branch', started: '8/30/25', status: 'Disclosure Timeout', statusType: 'timeout', action: 'Start New Application' },
]
