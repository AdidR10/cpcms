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
  atcoderColor: string ='';
  atcoderRating: number =0;
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
          const ratingString = this.user?.atcoder?.data?.rating; // Get Atcoder rating as string
      this.atcoderRating = ratingString ? parseInt(ratingString, 10) : 0; // Convert string to number
      this.atcoderColor = this.getColor(this.atcoderRating);
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

    getColor(rating: number): string {
      if (rating >= 2800 && rating <= 3199) {
        return 'red';
      } else if (rating >= 2400 && rating <= 2799) {
        return 'orange';
      } else if (rating >= 2000 && rating <= 2399) {
        return 'yellow';
      } else if (rating >= 1600 && rating <= 1999) {
        return 'blue';
      } else if (rating >= 1200 && rating <= 1599) {
        return 'cyan';
      } else if (rating >= 800 && rating <= 1199) {
        return 'green';
      } else if (rating >= 400 && rating <= 799) {
        return 'brown';
      } else if (rating >= 0 && rating <= 399) {
        return 'gray';
      } else {
        return ''; // Default color
      }
    }
}
