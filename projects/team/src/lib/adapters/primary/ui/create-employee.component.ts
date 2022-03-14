import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
}
