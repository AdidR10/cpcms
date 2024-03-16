import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Announcement } from 'src/app/models/announcementModel';
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
    @Inject(MAT_DIALOG_DATA) public data:any
    ){
      this.announcementForm=this._fb.group({
        admin_id:1804057,
        down_vote:0,
        upvote:0,
        post:'',
        date: [new Date()]
      })
    };
    ngOnInit(): void {
      if(this.data){
        this.postContent=this.data.body;
        const announcementDataForForm = {
          admin_id:this.data.userId,
          down_vote:0,
          upvote:0,
          post:this.data.body,
          date: this.data.date
        }
        this.announcementForm.patchValue(announcementDataForForm)
      }
    }

  onAnnouncementSubmit(){
    if(this.announcementForm.valid){
      const formData = this.announcementForm.value;
        const postData = {
          body: formData.post,
          userId: "60d6c7e1100f5c6c476fabc5",
          date: formData.date
        }

      if(this.data){
        this._adminService.updateAnnouncement(this.data._id, postData).subscribe({
          next: (val:any)=>{
            alert('Announcement Updated Successfully');
            this._dialogRef.close(true);
          },
          error: (err: any)=>{
            console.log(err);
          }
        });
      }
      else{
        this._adminService.addAnnouncement(postData).subscribe({
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
}