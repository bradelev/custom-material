import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Custom Material App';
  opened = true;
  links = [
    { route: '/card', name: 'Cards'},
    { route: '/button', name: 'Buttons'},
    { route: '/datepicker', name: 'Datepicker'},
  ];

  toggle(): void {
    this.opened = !this.opened;
  }
}
