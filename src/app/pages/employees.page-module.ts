import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { EmployeesComponentModule } from '@team';
import { EmployeeDetailsComponentModule } from '@team';
import { AboutUsComponentModule } from '@team';
import { FirebaseEmployeesServiceModule } from '@team';

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
    AboutUsComponentModule,
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [],
})
export class EmployeesPageModule {}
