import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import {
  EmployeeDetailsComponentModule,
  EmployeeIdResolverModule,
  FirebaseEmployeesServiceModule,
} from '@team';

@NgModule({
  imports: [
    CommonModule,
    EmployeeDetailsComponentModule,
    EmployeeIdResolverModule,
    FirebaseEmployeesServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
