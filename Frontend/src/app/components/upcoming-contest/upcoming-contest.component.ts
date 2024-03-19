import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ContestsService } from 'src/app/services/contests.service';
import { PageEvent } from '@angular/material/paginator';


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
  
  data:any=[];
  currentpage = 0;
  pageSize = 10;
  contestList: any[] = [];
  imageUrl= '/assets/cf-logo.jpg';
  imageCaption = 'Codeforces';

  p:any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private contestService:ContestsService){
    
  }
  
  ngOnInit(): void {
    this.getContestList();
  }

  getContestList(): void {
    this.contestService.getContestList().subscribe(
      (data: any) => {
        // Assign the fetched contest list to the contestList property
        this.contestList = data;
      },
      (error: any) => {
        // Handle error if any
        console.error('Error fetching contest list:', error);
      }
    );
  }

  handlePageEvent(event: PageEvent): void {
    this.currentpage = event.pageIndex;
  }


  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 3},
    {text: 'Two', cols: 3, rows: 3},
  ];

  deleteContest(contest: any): void {
    const contestId = contest._id; // Assuming contest object has an id property
    this.contestService.deleteContest(contestId).subscribe(
      () => {
        // Remove the deleted contest from the contestList
        this.contestList = this.contestList.filter(c => c.id !== contestId);
        alert('Contest deleted successfully');
        this.getContestList();
      },
      (error: any) => {
        console.error('Error deleting contest:', error);
        alert('Failed to delete contest');
      }
    );
  }



}
