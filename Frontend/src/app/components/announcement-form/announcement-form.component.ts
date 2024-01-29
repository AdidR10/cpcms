import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
        post:''
      })
    };
    ngOnInit(): void {
      this.postContent=this.data.post;
      this.announcementForm.patchValue(this.data);
    }

  onAnnouncementSubmit(){
    if(this.announcementForm.valid){
      if(this.data){
        this._adminService.updateAnnouncement(this.data.id, this.announcementForm.value).subscribe({
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
}
