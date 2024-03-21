import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AdminService } from 'src/app/services/admin.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-announcement-form',
  templateUrl: './announcement-form.component.html',
  styleUrls: ['./announcement-form.component.scss']
})
export class AnnouncementFormComponent {
  postContent: string = '';
  announcementForm: FormGroup;
  htmlContent ='';
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
   
  };

  

  constructor(private _fb:FormBuilder,
    private _adminService: AdminService,
    private _dialogRef:MatDialogRef<AnnouncementFormComponent>,
    private _snackbar: SnackbarService,
    private sanitizer: DomSanitizer,
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
            this._snackbar.showSnackbar('Announcement Updated Successfully', true);
            // alert('Announcement Updated Successfully');
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