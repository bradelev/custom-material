import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-cards-sample',
  templateUrl: './cards-sample.component.html',
  styleUrls: ['./cards-sample.component.scss']
})
export class CardsSampleComponent {

  constructor(private snackbar: MatSnackBar) { }

  openSnackBar() {
    this.snackbar.open('Beautiful dog!!', 'OK')
  }

}
