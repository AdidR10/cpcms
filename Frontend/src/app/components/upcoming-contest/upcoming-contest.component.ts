import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ContestsService } from 'src/app/services/contests.service'



@Component({
  selector: 'app-upcoming-contest',
  templateUrl: './upcoming-contest.component.html',
  styleUrls: ['./upcoming-contest.component.scss']
})
export class UpcomingContestComponent {
  
  data:any=[];
  p:any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private user:ContestsService){
    this.user.getContestList().subscribe((data: any)=>{
      console.log(this.data);
      this.data=data;
    });
  }
  
  ngOninit(){
    this.data.paginator = this.paginator;
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
}
