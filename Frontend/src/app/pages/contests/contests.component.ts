import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContestFormComponent } from 'src/app/components/contest-form/contest-form.component';
import { ContestsService } from 'src/app/services/contests.service';
import { Contest } from 'src/app/models/contestModel';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthenticationService } from './../../services/authentication.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-contests',
  templateUrl: './contests.component.html',
  styleUrls: ['./contests.component.scss'],
})
export class ContestsComponent implements OnInit {
  pagename = 'Contests';
  contests: Contest[] = [];
  imageUrl = '/assets/cf-logo.jpg';
  imageCaption = 'Codeforces';
  timeLeftMap: Map<string, string> = new Map(); // A Map to store time left for each contest

  p: any;

  constructor(
    private _dialog: MatDialog,
    private _contestsService: ContestsService,
    private _snackbar: SnackbarService,
    public authService: AuthenticationService,
    public timeService: TimeService
  ) {}

  ngOnInit(): void {
    this.getContestList();
  }
  calculateTimeLeftForContest(contest: Contest): string {
    // Ensure you combine date and time into a single string if they are separate
    const endDateTime = `${contest.date}T${contest.time}`;
    const correctedEndDateTime =
      endDateTime.replace('T00:00:00.000ZT', 'T') + ':00.000Z';

    return this.timeService.calculateTimeLeft(correctedEndDateTime);
  }

  getContestList(): void {
    this._contestsService.getContestList().subscribe({
      next: (res: Contest[]) => {
        this.contests = res.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      },
      error: console.error,
    });
  }

  openContestForm(): void {
    const dialogRef = this._dialog.open(ContestFormComponent, {
      data: { contest: {}, isEdit: false },
    });

    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {
          this.getContestList();
        }
      },
    });
  }

  handleEdit(contest: any): void {
    const id = contest._id;
    this._contestsService.getContestById(id).subscribe(
      (contestData) => {
        const dialogRef = this._dialog.open(ContestFormComponent, {
          data: { contestData: contest, isEdit: true }, // Renamed to contestData
        });
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getContestList();
            }
          },
        });
      },
      (error) => {
        console.error('Error fetching contest data:', error);
      }
    );
  }

  deleteContest(contest: any): void {
    const contestId = contest._id; // Assuming contest object has an id property
    this._contestsService.deleteContest(contestId).subscribe(
      () => {
        // Remove the deleted contest from the contestList
        this.contests = this.contests.filter((c) => c.id !== contestId);
        // alert('Contest deleted successfully');
        this._snackbar.showSnackbar('Contest deleted successfully', true);
        this.getContestList();
      },
      (error: any) => {
        console.error('Error deleting contest:', error);
        // alert('Failed to delete contest');
        this._snackbar.showSnackbar('Failed to delete contest', false);
      }
    );
  }
}
