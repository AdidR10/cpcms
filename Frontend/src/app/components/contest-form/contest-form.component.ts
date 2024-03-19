import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContestsService } from 'src/app/services/contests.service';

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
    private _dialogRef: MatDialogRef<ContestFormComponent>
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
            this._contestService.getContestList();
          },
          error: (err: any) => {
            console.log(err);
            alert('Failed to publish contest');
          }
        });
      }
    }
  }

  onDeleteContest() {
    if (this.contestId) {
      // Delete contest
      this._contestService.deleteContest(this.contestId).subscribe({
        next: (val: any) => {
          alert('Contest deleted successfully');
          this._dialogRef.close(true);
          this._contestService.getContestList();
        },
        error: (err: any) => {
          console.log(err);
          alert('Failed to delete contest');
        }
      });
    }
  }
}
