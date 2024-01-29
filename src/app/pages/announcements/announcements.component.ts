import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnnouncementCardComponent } from 'src/app/components/announcement-card/announcement-card.component';
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

  handleEdit(id: number): void {
    this._adminService.getAnnouncement(id).subscribe(
      (data) => {
        console.log("data fetched = "+data)
        this._dialog.open(AnnouncementFormComponent, {
          data,
        });
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }

  handleDelete(id: number): void {
    this._adminService.deleteAnnouncement(id).subscribe({
      next:(res)=>{
        alert('Announcement Deleted!');
        this.getAnnouncementList();
      },
      error: console.log
    })
  }

}
