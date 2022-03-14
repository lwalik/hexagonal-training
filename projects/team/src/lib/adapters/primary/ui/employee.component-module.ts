import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmployeeComponent],
  providers: [],
  exports: [EmployeeComponent],
})
export class EmployeeComponentModule {}
