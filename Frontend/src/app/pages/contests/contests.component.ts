import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContestFormComponent } from 'src/app/components/contest-form/contest-form.component';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent {
 pagename = 'Contests';
 constructor(private _dialog:MatDialog){}
 openContestForm(){
  this._dialog.open(ContestFormComponent);
}
}
