import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsComponent {
  employee$ = this._activatedRoute.params;
  constructor(private _activatedRoute: ActivatedRoute) {}
}
