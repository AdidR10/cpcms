import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ContestsService } from 'src/app/services/contests.service'



@Component({
  selector: 'app-user-card',
  templateUrl: './upcoming-contest.component.html',
  styleUrls: ['./upcoming-contest.component.scss']
})
export class UpcomingContestComponent {
  
  data:any=[];
  p:any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private user:ContestsService){
    this.user.getdata().subscribe((data: any)=>{
      console.log(this.data);
      this.data=data;
    });
  }
  
  ngOninit(){
    this.data.paginator = this.paginator;
  }
}
