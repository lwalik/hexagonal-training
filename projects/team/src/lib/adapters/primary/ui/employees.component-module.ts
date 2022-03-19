import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { EmployeeDetailsComponentModule } from './employee-details.component-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, EmployeeDetailsComponentModule, ReactiveFormsModule],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent],
})
export class EmployeesComponentModule {}
