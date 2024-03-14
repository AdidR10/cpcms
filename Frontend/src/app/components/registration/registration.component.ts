import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { AdminService } from 'src/app/services/admin.service';
import { User } from 'src/app/models/userModel';
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
    private _dialogRef: MatDialogRef<RegistrationComponent>,
    @Inject(MAT_DIALOG_DATA) public data:User 
    ){
    this.registerForm = this._fb.group({
      name:'',
      universityId:'',
      email:'',
      gender:'',
      codeforcesHandle:'',
      codechefHandle:'',
      atcoderHandle:''
    })
  }

  ngOnInit(): void {
    if (this.data) {
      console.log(this.data)
      const userDataForForm = {
        name: this.data.name,
        email: this.data.email,
        gender: this.data.gender,
        codeforcesHandle: this.data.codeforces.handle,
        codechefHandle: this.data.codechef.handle,
        atcoderHandle: this.data.atcoder.handle,
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
          handle: formData.codeforcesHandle,
        },
        codechef: {
          handle: formData.codechefHandle,
        },
        atcoder: {
          handle: formData.atcoderHandle,
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
        this._userService.addUser(postData).subscribe({
          next: (val:any)=>{
            alert('User Registration Request Sent');
            this._dialogRef.close(true);
          },
          error: (err: any)=>{
            console.log(err);
          }
        });
      }
    }
  }
}
