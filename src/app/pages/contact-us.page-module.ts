import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
import { ContactFormComponentModule } from '@messages';
import { AngularFireModule } from '@angular/fire';
import { FirebaseMessagesServiceModule } from '@messages';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactUsPage,
      },
    ]),
    ContactFormComponentModule,
    AngularFireModule,
    ContactFormComponentModule,
    FirebaseMessagesServiceModule,
  ],
  declarations: [ContactUsPage],
  providers: [],
  exports: [],
})
export class ContactUsPageModule {}
