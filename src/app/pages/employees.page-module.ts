import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import {
  EmployeesComponentModule,
  EmployeeDetailsComponentModule,
  FirebaseEmployeesServiceModule,
} from '@team';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeDetailsPageModule } from './employee-details.page-module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
      },
    ]),
    CommonModule,
    FirebaseEmployeesServiceModule,
    EmployeesComponentModule,
    EmployeeDetailsComponentModule,
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [],
})
export class EmployeesPageModule {}
