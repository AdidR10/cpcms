import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user:any
  constructor(private _route: ActivatedRoute,
    private _userService: UserService
    ){}
  
    ngOnInit(): void {
      const id = Number(this._route.snapshot.paramMap.get('id'));
      this.getUser(id);
    }
    getUser(id:number){
      this._userService.getUserProfile(id).subscribe({
        next:(res)=>{
          this.user=res;
        },
        error: console.log
      })
    }
}
