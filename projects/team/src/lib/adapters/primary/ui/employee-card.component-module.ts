import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card.component';

@NgModule({ imports: [CommonModule],
  	declarations: [EmployeeCardComponent],
  	providers: [],
  	exports: [EmployeeCardComponent] })
export class EmployeeCardComponentModule {
}
