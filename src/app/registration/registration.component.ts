import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerForm: FormGroup;
  constructor(private _fb: FormBuilder, private _userService: UserService, private _dialogRef: DialogRef<RegistrationComponent> ){
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

  onFormSubmit(){
    if(this.registerForm.valid){
      
      this._userService.addUser(this.registerForm.value).subscribe({
        next: ()=>{
          alert('User Registration Request Sent');
          this._dialogRef.close();
        },
        error: (err: any)=>{
          console.log(err);
        }
      });
    }
  }
}
