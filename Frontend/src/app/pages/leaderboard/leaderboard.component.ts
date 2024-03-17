import { Component, Inject, InjectionToken, OnInit, ViewChild } from '@angular/core';
import {MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


import { RegistrationComponent } from '../../components/registration/registration.component';
import { UserService } from '../../services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit{
  
  displayedColumns: string[] = [
    'rank', 
    'name', 
    'codeforcesRating',
    'codechefRating',
    'atcoderRating',
    'overallRating',
  ];
  
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _userService:UserService,
    private _adminService:AdminService,
    private _dialog: MatDialog,
    private _snackbar: SnackbarService,
    private authService: AuthenticationService

    ){}

  ngOnInit(): void {
    if (this.checkAuthentication()) {
      this.displayedColumns.push('action')
    }
    this.getUserList();

  }
  getUserList(){
    this._userService.getUserList().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(this.dataSource)
      },
      error: console.log
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteUser(id: string){
    this._adminService.deleteUser(id).subscribe({
      next:(res)=>{
        this._snackbar.showSnackbar('User Deleted!', true)
        this.getUserList();
      },
      error: console.log
    })
  }

  openEditForm(id: string): void{
    this._userService.getUser(id).subscribe(
      (userData) => {
        console.log("data fetched = "+userData)
        this._dialog.open(RegistrationComponent, {
          data: userData,
        });
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }
  checkAuthentication(){
    return this.authService.isAuthenticated();
  }
}




