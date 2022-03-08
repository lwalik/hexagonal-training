import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutPage } from './about.page';
import { AboutUsComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/about-us.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AboutPage,
      },
    ]),
    AboutUsComponentModule,
  ],
  declarations: [AboutPage],
  providers: [],
  exports: [],
})
export class AboutPageModule {}
