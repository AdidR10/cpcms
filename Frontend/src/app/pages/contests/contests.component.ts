import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContestFormComponent } from 'src/app/components/contest-form/contest-form.component';
import { ContestsService } from 'src/app/services/contests.service';


@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss']
})
export class ContestsComponent {
 pagename = 'Contests';
 constructor(private _dialog:MatDialog, private _contestService: ContestsService,){}
 openContestForm(){
  this._dialog.open(ContestFormComponent);
  this._contestService.getContestList();
}
}
