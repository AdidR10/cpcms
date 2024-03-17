import { Component } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(
    private router: Router, 
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

}
