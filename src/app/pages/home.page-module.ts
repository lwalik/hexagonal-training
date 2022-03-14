import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { EmployeeComponentModule } from '@team';
import { AboutUsComponentModule } from '@team';
import { FirebaseEmployeesServiceModule } from '@team';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
      },
    ]),
    EmployeeComponentModule,
    AboutUsComponentModule,
    FirebaseEmployeesServiceModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
