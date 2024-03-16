import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
  registerForm: FormGroup;
  constructor(
    private _fb: FormBuilder, 
    private _userService: UserService, 
    private _adminService:AdminService,
    private _requestService: RequestsService,
    private _dialogRef: MatDialogRef<RegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any 
    ){
    this.registerForm = this._fb.group({
      name:'',
      universityId:'',
      email:'',
      gender:'',
      CodeforcesID:'',
      CodechefID:'',
      AtcoderID:''
    })
  }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data)
      const userDataForForm = {
        name: this.data.name,
        email: this.data.email,
        gender: this.data.gender,
        CodeforcesID: this.data.codeforces.handle,
        CodechefID: this.data.codechef.handle,
        AtcoderID: this.data.atcoder.handle,
        universityId: this.data.universityId,
      };
      this.registerForm.patchValue(userDataForForm);
    }
  }
  onFormSubmit(){
    if(this.registerForm.valid){
      
      const formData = this.registerForm.value;
      const postData = {
        name: formData.name,
        universityId: formData.universityId,
        email: formData.email,
        gender: formData.gender,
        codeforces: {
          handle: formData.CodeforcesID,
        },
        codechef: {
          handle: formData.CodechefID,
        },
        atcoder: {
          handle: formData.AtcoderID,
        }
      };


      if(this.data){
        this._adminService.updateUser(this.data._id, postData).subscribe({
          next: (val:any)=>{
            alert('User Updated Successfully');
            this._dialogRef.close(true);
          },
          error: (err: any)=>{
            console.log("my error",err);
            console.log("id== ", this.data._id);
            console.log("data = ", postData);
          }
        });
      }
      else{
        this._requestService.sendRequest(formData).subscribe({
          next: (val:any)=>{
            alert('User Registration Request Sent');
            this._dialogRef.close(true);
          },
          error: (err: any)=>{
            console.log("very sad",err);
          }
        });
      }
    }
  }
}
