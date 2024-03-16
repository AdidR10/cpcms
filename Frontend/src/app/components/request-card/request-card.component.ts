import { Component,EventEmitter, Input, Output } from '@angular/core';
import { NevigationsService } from 'src/app/services/nevigations.service';
import { RequestsService } from 'src/app/services/requests.service';
@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.scss']
})
export class RequestCardComponent {
  @Input() request: any;
  @Output() getRequests = new EventEmitter<void>();
  constructor(
    private nevigation:NevigationsService,
    private _request: RequestsService
  ){}
  accept() {
    // Handle accept logic here
    const postData = {
      name: this.request.name,
      universityId: this.request.universityId,
      email: this.request.email,
      gender: this.request.gender,
      codeforces: {
        handle: this.request.codeforcesHandle,
      },
      codechef: {
        handle: this.request.codechefHandle,
      },
      atcoder: {
        handle: this.request.atcoderHandle,
      }
    };
    const request_id = this.request.id

    this._request.addUser(postData).subscribe({
      next:(val:any)=>{
        alert('User Added to Leaderboard');
        


        this._request.deleteRequest(request_id).subscribe({
          next:(res)=>{
            this.getRequests.emit();
          },
          error: console.log
        })
      },
      error:console.error
    })
  }

  reject(id: string) {
    this._request.deleteRequest(id).subscribe({
      next:(res)=>{
        alert('User Deleted!');
        this.getRequests.emit();
      },
      error: console.log
    })
  }
  navigateToExternalProfile(handle: string, site: string){
    this.nevigation.navigateToExternalProfile(handle,site);
  }

}
