import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ContestsService } from 'src/app/services/contests.service'



@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent {
  
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
