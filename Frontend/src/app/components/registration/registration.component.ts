import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { AdminService } from 'src/app/services/admin.service';

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
    @Inject(MAT_DIALOG_DATA) public data:any 
    ){
    this.registerForm = this._fb.group({
      firstName:'',
      lastName:'',
      email:'',
      gender:'',
      codeforcesHandle:'',
      codechefHandle:'',
      atcoderHandle:''
    })
  }

  ngOnInit(): void {
    this.registerForm.patchValue(this.data);
  }
  onFormSubmit(){
    if(this.registerForm.valid){
      
      if(this.data){
        this._adminService.updateUser(this.data.id, this.registerForm.value).subscribe({
          next: (val:any)=>{
            alert('User Updated Successfully');
            this._dialogRef.close(true);
          },
          error: (err: any)=>{
            console.log(err);
          }
        });
      }
      else{
        this._userService.addUser(this.registerForm.value).subscribe({
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

  createRegisterForm(): FormGroup {
    return this._fb.group({
      name: '',
      universityId: '',
      email: '',
      gender: '',
      codeforces: this._fb.group({
        handle: [''],
        data: this._fb.group({
          lastName: [''],
          lastOnlineTimeSeconds: [''],
          rating: [''],
          friendOfCount: [''],
          titlePhoto: [''],
          avatar: [''],
          firstName: [''],
          contribution: [''],
          organization: [''],
          rank: [''],
          maxRating: [''],
          registrationTimeSeconds: [''],
          maxRank: ['']
        })
      }),
      codechef: this._fb.group({
        handle: [''],
        data: this._fb.group({
          profile: [''],
          name: [''],
          currentRating: [''],
          highestRating: [''],
          countryFlag: [''],
          countryName: [''],
          globalRank: [''],
          countryRank: [''],
          stars: ['']
        })
      }),
      atcoder: this._fb.group({
        handle: [''],
        data: this._fb.group({
          birthYear: [''],
          country: [''],
          rank: [''],
          rating: [''],
          highestRating: [''],
          ratedMatches: ['']
        })
      })
    });
  }
}
