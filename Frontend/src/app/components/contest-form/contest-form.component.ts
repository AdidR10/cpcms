import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContestsService } from 'src/app/services/contests.service';

@Component({
  selector: 'app-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls: ['./contest-form.component.scss']
})
export class ContestFormComponent {
  
  contestForm: FormGroup;
  constructor(private _fb:FormBuilder,
    private _contestService:ContestsService,
    private _dialogRef:MatDialogRef<ContestFormComponent>,
    ){
    this.contestForm = this._fb.group({
      contestName:'',
      contestLink: '',
      contestPassWord: '',
      contestDate: '',
      contestTime: '',
      contestDuration: '',
      contestType: ''
    })
  }
  onContestSubmit(){
    this._contestService.addContest(this.contestForm.value).subscribe({
      next:(val:any)=>{
        alert('New Contest Published');
        this._dialogRef.close(true);
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
}
