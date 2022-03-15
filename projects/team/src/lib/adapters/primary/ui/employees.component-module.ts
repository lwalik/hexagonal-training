import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeCardComponentModule } from './employee-card.component-module';

@NgModule({
  imports: [CommonModule, RouterModule, EmployeeCardComponentModule],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
