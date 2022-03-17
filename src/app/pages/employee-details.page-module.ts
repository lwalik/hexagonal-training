import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import {
  EmployeesComponentModule,
  FirebaseEmployeesServiceModule,
} from '@team';
import { EmployeeDetailsComponentModule } from '@team';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
    EmployeesComponentModule,
    EmployeeDetailsComponentModule,
    FirebaseEmployeesServiceModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
