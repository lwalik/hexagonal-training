import { DepartmentDTO } from './department.dto';

export interface EmployeeDTO {
  readonly imgUrl: string;
  readonly bio: string;
  readonly age: string;
  readonly country: string;
  department: DepartmentDTO;
}
