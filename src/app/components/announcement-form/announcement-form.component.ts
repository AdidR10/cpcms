import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent {
  postContent: string = '';
  announcementForm: FormGroup;
  constructor(private _fb:FormBuilder,
    private _adminService: AdminService,
    private _dialogRef:MatDialogRef<AnnouncementFormComponent>,
    ){
      this.announcementForm=this._fb.group({
        admin_id:1804057,
        down_vote:0,
        upvote:0,
        post:''
      })
    };

  onAnnouncementSubmit(){
    if(this.announcementForm.valid){
      this._adminService.addAnnouncement(this.announcementForm.value).subscribe({
        next:(val:any)=>{
          alert('New Announcement Published');
          this._dialogRef.close(true);
        },
        error:(err:any)=>{
          console.log(err);
        }
      })
    }
  }
}
