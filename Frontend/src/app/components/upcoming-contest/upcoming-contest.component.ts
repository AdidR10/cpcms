import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
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
  styleUrls: ['./upcoming-contest.component.scss'],
})
export class UpcomingContestComponent implements OnInit {
  timeLeft: string = '';

  ngOnInit(): void {
    // Calculate time left
    const endDate = new Date('2024-12-31T23:59:59'); // Set your end date here
    setInterval(() => {
      const now = new Date().getTime();
      const difference = endDate.getTime() - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        this.timeLeft = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
      } else {
        this.timeLeft = 'Expired';
      }
    }, 1000);
  }
}
