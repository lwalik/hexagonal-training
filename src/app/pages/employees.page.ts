import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'lib-employees-page',
  templateUrl: './employees.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPage {}
