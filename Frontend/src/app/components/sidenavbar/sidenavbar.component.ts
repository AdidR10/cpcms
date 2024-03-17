import { Component, Input, computed, signal, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

export type MenuItems = {
  icon: string;
  label: string;
  route: string;
}


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})


export class SidenavbarComponent implements OnInit {
  constructor(public authService: AuthenticationService) {}
  ngOnInit() {
    this.checkAuthentication();
  }
  
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }
  menuItemsUsers = signal<MenuItems[]>([
    { icon: 'analytics', label:'Leaderboard', route:'leaderboard' },
    { icon: 'dashboard', label:'Contests', route:'contests' },
    { icon: 'campaign', label:'Announcements', route:'announcements' },
    { icon: 'verified_user', label:'LogIn as Admin', route:'sign-in' }
    // { icon: 'admin_panel_settings', label:'Admin Dashboard', route:'admin-dash-board' },
    // { icon: 'campaign', label:'Log Out', route:'log-out' }
  ]);

  menuItemsAdmins = signal<MenuItems[]>([
    { icon: 'analytics', label:'Leaderboard', route:'leaderboard' },
    { icon: 'dashboard', label:'Contests', route:'contests' },
    { icon: 'campaign', label:'Announcements', route:'announcements' },
    // { icon: 'verified_user', label:'LogIn as Admin', route:'sign-in' },
    { icon: 'admin_panel_settings', label:'Admin Dashboard', route:'admin-dash-board' },
    { icon: 'campaign', label:'Log Out', route:'log-out' }
  ]);


  profilePicSize = computed(()=>this.sideNavCollapsed()?'32':'100');

  token:any;
  checkAuthentication() {
    if (this.authService.isAuthenticated()) {
      this.token='admin';
    } else {
      this.token='user';
    }
  }

}
