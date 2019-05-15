import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsSampleComponent } from './cards-sample/cards-sample.component';
import { ButtonsSampleComponent } from './buttons-sample/buttons-sample.component';
import { DatepickerSampleComponent } from './datepicker-sample/datepicker-sample.component';

const routes: Routes = [
  {
    path: 'card',
    component: CardsSampleComponent
  },
  {
    path: 'button',
    component: ButtonsSampleComponent
  },
  {
    path: 'datepicker',
    component: DatepickerSampleComponent
  },
  {
    path: '',
    redirectTo: 'card',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
