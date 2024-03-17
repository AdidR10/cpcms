import { Component ,OnInit} from '@angular/core';
import { UserRequest } from 'src/app/models/userRequest';
import { RequestsService } from 'src/app/services/requests.service';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent {
  pagename = 'AdminDashboard';
  requests: any | undefined;
  constructor(
    private _requestService: RequestsService
  ){}

  ngOnInit(): void{
    this.getRequests();
  }

  getRequests():void{
    this._requestService.getRequests().subscribe({
      next: (res) => {
        this.requests = res;
        console.log("requests= ",this.requests)
      },
      error: console.error
    })
  }
}
