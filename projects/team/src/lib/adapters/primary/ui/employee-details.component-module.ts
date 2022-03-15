import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details.component';
import { RouterModule } from '@angular/router';
import { EmployeeCardComponentModule } from './employee-card.component-module';

@NgModule({
  imports: [CommonModule, RouterModule, EmployeeCardComponentModule],
  declarations: [EmployeeDetailsComponent],
  providers: [],
  exports: [EmployeeDetailsComponent],
})
export class EmployeeDetailsComponentModule {}
