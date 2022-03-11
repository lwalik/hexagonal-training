import { DepartmentDTO } from './department.dto';

export interface EmployeeDTO {
  readonly imgUrl: string;
  readonly bio: string;
  department: DepartmentDTO;
}
