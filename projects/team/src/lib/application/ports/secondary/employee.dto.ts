import { CountryDTO } from './country.dto';
import { DepartmentDTO } from './department.dto';

export interface EmployeeDTO {
  readonly id: string;
  readonly bio: string;
  readonly age: number;
  readonly email: string;
  readonly tel: string;
  readonly imageURL: string;
  readonly country: CountryDTO;
  readonly department: DepartmentDTO;
}
