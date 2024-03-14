import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {User} from 'src/app/models/userModel';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User | undefined;
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService
    ){}
  
    ngOnInit(): void {
      const id = String(this._route.snapshot.paramMap.get('id'));
      this.getUser(id);
    }
    getUser(id:string){
      this._userService.getUser(id).subscribe({
        next:(res)=>{
          this.user=res;
          console.log("user = ", res)
        },
        error:(error)=>{
          console.log("Found error ", error)
        }
      })
    }
    navigateToExternalProfile(handle: string, site: string) {
      if(site=='codeforces'){
        window.location.href = `https://codeforces.com/profile/${handle}`;
      }
      else if(site=='codechef'){
        window.location.href = `https://www.codechef.com/users/${handle}`;
      }
      else if(site=='atcoder'){
        window.location.href = `https://atcoder.jp/users/${handle}`;
      }
      else if(site=='vjudge'){
        window.location.href = `https://vjudge.net/user/${handle}`;
      }
    }
}
