
using { ust.harshini.karri.DB as db } from '../db/schema';

service EmployeeService {
  entity EmployeeSet as projection on db.Employee;
}