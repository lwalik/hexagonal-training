import { Observable, of } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  GETS_ALL_EMPLOYEE_DTO,
  GetsAllEmployeeDtoPort,
} from '../../../application/ports/secondary/gets-all-employee.dto-port';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from '../../../application/ports/secondary/context-dto.storage-port';

@Component({
  selector: 'lib-employees',
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  employees$: Observable<EmployeeDTO[]> = this._getsAllEmployeeDto.getAll();

  constructor(
    @Inject(GETS_ALL_EMPLOYEE_DTO)
    private _getsAllEmployeeDto: GetsAllEmployeeDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStorage: ContextDtoStoragePort
  ) {}

  onEmployeeClicked(employee: EmployeeDTO): void {
    this._contextDtoStorage.next({ employeeId: employee.id });
  }
}
