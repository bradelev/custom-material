import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsSampleComponent } from './cards-sample/cards-sample.component';
import { ButtonsSampleComponent } from './buttons-sample/buttons-sample.component';
import { DatepickerSampleComponent } from './datepicker-sample/datepicker-sample.component';
import { DemoMaterialModule } from './demo-material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CardsSampleComponent,
    ButtonsSampleComponent,
    DatepickerSampleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
