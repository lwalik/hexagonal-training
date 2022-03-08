import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-employee-details-page',
  templateUrl: './employee-details.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsPage {}
