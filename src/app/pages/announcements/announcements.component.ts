import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementFormComponent } from 'src/app/components/announcement-form/announcement-form.component';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit{
  pagename='Announcements';
  announcements!:any[];
  constructor(private _dialog:MatDialog,
    private _adminService: AdminService
    ){}

    ngOnInit(): void{
      this.getAnnouncementList();
    }
  openAnnouncementForm(){
    const dialogRef = this._dialog.open(AnnouncementFormComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=>{
        if(val){
          this.getAnnouncementList();
        }
      }
    }) 
  }

  getAnnouncementList(){
    this._adminService.getAnnouncementList().subscribe({
      next:(res)=>{
        this.announcements = res;
      },
      error: console.log
    })
  }

}
