import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ContestsService } from 'src/app/services/contests.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ContestFormComponent } from 'src/app/components/contest-form/contest-form.component';
import { Contest } from 'src/app/models/contestModel';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthenticationService } from './../../services/authentication.service';



export interface Tile {
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-upcoming-contest',
  templateUrl: './upcoming-contest.component.html',
  styleUrls: ['./upcoming-contest.component.scss']
})
export class UpcomingContestComponent {
  
  pagename = 'Contests';
  contests: Contest[] = [];
  imageUrl= '/assets/cf-logo.jpg';
  // imageUrl= 'https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp';
  imageCaption = 'Codeforces';

  p:any;


  constructor(
    private _dialog: MatDialog,
    private _contestsService: ContestsService,
    private _snackbar: SnackbarService,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.getContestList();
  }

  getContestList(): void {
    this._contestsService.getContestList().subscribe({
      next: (res: Contest[]) => {
        this.contests = res.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      },
      error: console.error
    });
  }

  openContestForm(): void {
    const dialogRef = this._dialog.open(ContestFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: any) => {
        if (val) {
          this.getContestList();
        }
      }
    });
  }

  handleEdit(contest: any): void {
    const id = contest._id;
    this._contestsService.getContestById(id).subscribe(
      (contestData) => {
        const dialogRef = this._dialog.open(ContestFormComponent, {
          data: { contest: contest, isEdit: true }

        });
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getContestList();
            }
          }
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
        this.contests = this.contests.filter(c => c.id !== contestId);
        alert('Contest deleted successfully');
        this.getContestList();
      },
      (error: any) => {
        console.error('Error deleting contest:', error);
        alert('Failed to delete contest');
      }
    );
  }

  // rowSize =5;
  // colSize =2;


  // tiles: Tile[] = [
  //   {text: 'One', cols: this.colSize, rows: this.rowSize},
  //   {text: 'Two', cols: this.colSize, rows: this.rowSize},
  //   {text: 'three', cols: this.colSize, rows: this.rowSize},
  //   // {text: 'four', cols: 2, rows: 7},
  // ];
}
