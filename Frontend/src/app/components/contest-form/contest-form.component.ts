import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContestsService } from 'src/app/services/contests.service';
import { Contest } from 'src/app/models/contestModel';


@Component({
  selector: 'app-contest-form',
  templateUrl: './contest-form.component.html',
  styleUrls: ['./contest-form.component.scss']
})
export class ContestFormComponent implements OnInit {
  contestForm: FormGroup;
  isEdit: boolean = false;
  contestId: string | undefined;

  constructor(
    private _fb: FormBuilder,
    private _contestService: ContestsService,
    private _dialogRef: MatDialogRef<ContestFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { contest: Contest, isEdit: boolean }
    
  ) {
    this.contestForm = this._fb.group({
      contestLink: '',
      contestName: '',
      contestPassword: '',
      contestDate: '',
      contestTime: '',
      contestDuration: '',
      contestType: ''
    });
    this.isEdit = this.data.isEdit;
    if (this.isEdit) {
      this.contestForm.patchValue(this.data.contest);
    }

  }

  ngOnInit(): void {
    if (this.isEdit && this.contestId) {
      // Fetch contest details for editing
      this._contestService.getContestById(this.contestId).subscribe((contest: any) => {
        this.contestForm.patchValue({
          contestLink: contest.link,
          contestName: contest.name,
          contestPassword: contest.password,
          contestDate: contest.date,
          contestTime: contest.time,
          contestDuration: contest.duration,
          contestType: contest.type
        });
      });
    }
  }

  onContestSubmit() {
    if (this.contestForm.valid) {
      const formData = this.contestForm.value;
      const postData = {
        link: formData.contestLink,
        name: formData.contestName,
        password: formData.contestPassword,
        date: formData.contestDate,
        time: formData.contestTime,
        duration: formData.contestDuration,
        type: formData.contestType
      };

      if (this.isEdit && this.contestId) {
        // Update contest
        this._contestService.updateContest(this.contestId, postData).subscribe({
          next: (val: any) => {
            alert('Contest updated successfully');
            this._dialogRef.close(true);
            this._contestService.getContestList();
          },
          error: (err: any) => {
            console.log(err);
            alert('Failed to update contest');
          }
        });
      } else {
        // Add new contest
        this._contestService.addContest(postData).subscribe({
          next: (val: any) => {
            alert('New Contest Published');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
            alert('Failed to publish contest');
          }
        });
      }
    }
  }

  
}