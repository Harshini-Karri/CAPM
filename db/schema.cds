 
namespace ust.harshini.karri.DB;

using { cuid, Currency } from '@sap/cds/common';
using { ust.harshini.karri.reuse as reuse } from '../srv/types';

entity Employee : cuid {
  nameFirst     : String(40);
  nameMiddle    : String(40);
  nameLast      : String(40);
  nameInitials  : String(40);
  gender        : reuse.Gender;
  language      : String(1);
  phoneNumber   : reuse.PhoneNumber;
  email         : reuse.Email;
  loginName     : String(12);
  currency      : Currency;
  salaryAmount  : Decimal(10,2);
  accountNumber : String(16);
  bankId        : String(8);
  bankName      : String(64);
}
