import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-coder-add-edit',
  templateUrl: './coder-add-edit.component.html',
  styleUrls: ['./coder-add-edit.component.scss']
})
export class CoderAddEditComponent {
  constructor (private _dialog: MatDialog){}
  openAddEditForm(){
    this._dialog.open(CoderAddEditComponent);
  }
}
