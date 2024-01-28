import { Component, computed, signal } from '@angular/core';
import { RegistrationComponent } from './components/registration/registration.component';
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

  collapsed = signal(false);
  sidenavWidth = computed(()=>this.collapsed()? '65px':'250px');
}

