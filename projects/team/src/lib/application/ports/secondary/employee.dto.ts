import { CountryDTO } from './country.dto';
import { DepartmentDTO } from './department.dto';

export interface EmployeeDTO {
  readonly imgUrl: string;
  readonly bio: string;
  readonly age: number;
  readonly country: CountryDTO;
  readonly department: DepartmentDTO;
}
