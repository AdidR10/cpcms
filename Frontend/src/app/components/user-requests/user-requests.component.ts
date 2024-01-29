import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ContestsService } from 'src/app/services/contests.service'
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user-requests',
  templateUrl: './user-requests.component.html',
  styleUrls: ['./user-requests.component.scss']
})
export class UserRequestsComponent {
  
  data:any=[];
  p:any;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private user:UserService){
    this.user.getRequestList().subscribe((data: any)=>{
      console.log(this.data);
      this.data=data;
    });
  }
  
  ngOninit(){
    this.data.paginator = this.paginator;
  }
}
