import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_EMPLOYEE_DTO,
  AddsEmployeeDtoPort,
} from '../../../application/ports/secondary/adds-employee.dto-port';

@Component({
  selector: 'lib-create-employee',
  templateUrl: './create-employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEmployeeComponent {
  readonly createEmployee: FormGroup = new FormGroup({
    bio: new FormControl(),
    age: new FormControl(),
    countryId: new FormControl(),
    countryName: new FormControl(),
    departmentId: new FormControl(),
    departmentName: new FormControl(),
    departmentEmployeeCount: new FormControl(),
  });

  constructor(
    @Inject(ADDS_EMPLOYEE_DTO) private _addsEmployeeDto: AddsEmployeeDtoPort
  ) {}

  onCreateEmployeeSubmited(createEmployee: FormGroup): void {
    if (createEmployee.invalid) {
      return;
    }
    this._addsEmployeeDto.add({
      bio: createEmployee.get('bio').value,
      age: createEmployee.get('age').value,
      country: {
        id: createEmployee.get('countryId').value,
        name: createEmployee.get('countryId').value,
      },
      department: {
        id: createEmployee.get('departmentId').value,
        name: createEmployee.get('departmentName').value,
        employeeCount: createEmployee.get('departmentEmployeeCount').value,
      },
    });
    this.createEmployee.reset();
  }
}
