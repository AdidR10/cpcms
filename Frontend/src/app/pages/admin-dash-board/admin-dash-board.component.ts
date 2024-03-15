import { Component ,OnInit} from '@angular/core';
import { RequestsService } from 'src/app/services/requests.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent {
  pagename = 'AdminDashboard';
  requests: [] | undefined;
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
      },
      error: console.error

    })
  }
}
