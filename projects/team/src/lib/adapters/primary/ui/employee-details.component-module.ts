import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmployeeDetailsComponent],
  providers: [],
  exports: [EmployeeDetailsComponent],
})
export class EmployeeDetailsComponentModule {}
