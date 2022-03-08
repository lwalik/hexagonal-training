import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { EmployeeDetailsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-details.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EmployeeDetailsPage,
      },
    ]),
    OurTeamComponentModule,
    EmployeeDetailsComponentModule,
  ],
  declarations: [EmployeeDetailsPage],
  providers: [],
  exports: [],
})
export class EmployeeDetailsPageModule {}
