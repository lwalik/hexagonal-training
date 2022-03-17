import { CountryDTO } from './country.dto';
import { DepartmentDTO } from './department.dto';

export interface EmployeeDTO {
  readonly id: string;
  readonly bio: string;
  readonly age: number;
  readonly imageURL: string;
  readonly country: CountryDTO;
  readonly department: DepartmentDTO;
}
