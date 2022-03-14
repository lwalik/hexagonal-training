import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import {
  CreateEmployeeComponentModule,
  FirebaseEmployeesServiceModule,
} from '@team';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  imports: [
    CommonModule,
    CreateEmployeeComponentModule,
    AngularFireModule,
    FirebaseEmployeesServiceModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPage,
      },
    ]),
  ],
  declarations: [AdminPage],
  providers: [],
  exports: [],
})
export class AdminPageModule {}
