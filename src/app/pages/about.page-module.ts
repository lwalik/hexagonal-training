import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPage } from './about.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AboutPage,
        }
      ])],
  	declarations: [AboutPage],
  	providers: [],
  	exports: [] })
export class AboutPageModule {
}
