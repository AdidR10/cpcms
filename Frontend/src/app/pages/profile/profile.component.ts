import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {User} from 'src/app/models/userModel';
import { NevigationsService } from 'src/app/services/nevigations.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user:User | undefined;
  constructor(
    private _navigation: NevigationsService,
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
      this._navigation.navigateToExternalProfile(handle,site);
    }
}
