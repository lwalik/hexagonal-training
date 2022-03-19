import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import {
  EmployeesComponentModule,
  EmployeeDetailsComponentModule,
  FirebaseEmployeesServiceModule,
  EmployeeIdResolverModule,
} from '@team';
import { EmployeeDetailsPage } from './employee-details.page';
import { EmployeeIdResolver } from 'projects/team/src/lib/adapters/primary/ui/employee-id.resolver';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
        resolve: {
          employeeId: EmployeeIdResolver,
        },
      },
      {
        path: ':employeeId',
        component: EmployeeDetailsPage,
        resolve: {
          employeeId: EmployeeIdResolver,
        },
      },
    ]),
    CommonModule,
    FirebaseEmployeesServiceModule,
    EmployeesComponentModule,
    EmployeeDetailsComponentModule,
    EmployeeIdResolverModule,
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [],
})
export class EmployeesPageModule {}
