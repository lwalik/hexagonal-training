import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { EmployeeDetailsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-details.component-module';
import { AboutUsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/about-us.component-module';
import { FirebaseEmployeesServiceModule } from '@team';

@NgModule({
  imports: [
    CommonModule,
    FirebaseEmployeesServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeesPage,
      },
    ]),
    OurTeamComponentModule,
    EmployeeDetailsComponentModule,
    AboutUsComponentModule,
  ],
  declarations: [EmployeesPage],
  providers: [],
  exports: [],
})
export class EmployeesPageModule {}
