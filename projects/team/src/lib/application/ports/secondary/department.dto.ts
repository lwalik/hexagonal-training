import { CountryDTO } from './country.dto';

export interface DepartmentDTO {
  readonly id: string;
  readonly name: string;
  // readonly country: CountryDTO;
  readonly employeeCount: number;
}
