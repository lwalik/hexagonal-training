import { ActivatedRoute } from '@angular/router';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../../../application/ports/secondary/employee.dto';
import {
  GETS_ONE_EMPLOYEE_DTO,
  GetsOneEmployeeDtoPort,
} from '../../../application/ports/secondary/gets-one-employee.dto-port';

@Component({
  selector: 'lib-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent {
  param = this._activatedRoute.snapshot.params.employeeId;
  employee$: Observable<EmployeeDTO> = this._getsOneEmployeeDto.getOne(
    this.param
  );

  constructor(
    @Inject(GETS_ONE_EMPLOYEE_DTO)
    private _getsOneEmployeeDto: GetsOneEmployeeDtoPort,
    private _activatedRoute: ActivatedRoute
  ) {}
}
