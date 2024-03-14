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
  imageUrl= 'ss';
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
        this.contestList = data.result;
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

  convertToHoursMinutes(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  }

  convertToDate(seconds: number): string {
    const date = new Date(seconds * 1000); // Convert seconds to milliseconds
    return date.toLocaleString();
  }
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 2},
    {text: 'Two', cols: 3, rows: 2},
  ];


}
