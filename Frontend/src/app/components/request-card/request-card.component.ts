import { Component,EventEmitter, Input, Output } from '@angular/core';
import { NevigationsService } from 'src/app/services/nevigations.service';
import { RequestsService } from 'src/app/services/requests.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
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
    private _request: RequestsService,
    private _snackbar: SnackbarService
  ){}
  
  accept() {

    const request_id = this.request._id

    this._request.approveRequest(this.request).subscribe({
      next:(val:any)=>{
        this._snackbar.showSnackbar('User Added to Leaderboard',true);
        
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
        this._snackbar.showSnackbar('User Deleted!',true)
        this.getRequests.emit();
      },
      error: console.log
    })
  }
  navigateToExternalProfile(handle: string, site: string){
    this.nevigation.navigateToExternalProfile(handle,site);
  }

}
