import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EmployeeCardComponent],
  providers: [],
  exports: [EmployeeCardComponent],
})
export class EmployeeCardComponentModule {}
