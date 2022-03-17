import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponentModule } from '@navigation';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { InMemoryContextStorageModule } from '@team';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NavbarComponentModule,
    AngularFireModule.initializeApp(environment.firebase),
    InMemoryContextStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
