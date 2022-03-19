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
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
    CommonModule,
    EmployeeDetailsComponentModule,
    EmployeeIdResolverModule,
    FirebaseEmployeesServiceModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
