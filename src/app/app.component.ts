import { Component } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cpcms';

  constructor(private _dialog: MatDialog){}

  openAddEditForm(){
    this._dialog.open(RegistrationComponent);
  }
}

