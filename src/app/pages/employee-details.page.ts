import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-employee-details-page',
  templateUrl: './employee-details.page.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeDetailsPage implements OnInit {
  employee: { name: string };
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.employee = {
      name: this.route.snapshot.params['name'],
    };
  }
}
