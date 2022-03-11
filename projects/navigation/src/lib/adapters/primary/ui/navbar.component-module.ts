import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../../../../../../../src/app/app-routing.module';

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [NavbarComponent],
  providers: [],
  exports: [NavbarComponent],
})
export class NavbarComponentModule {}
