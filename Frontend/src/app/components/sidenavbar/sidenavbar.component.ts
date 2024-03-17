import { Component, Input, computed, signal } from '@angular/core';
export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})


export class SidenavbarComponent {
  sideNavCollapsed = signal(false);
  
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val);
  }
  menuItems = signal<MenuItem[]>([
    
    {
      icon: 'analytics',  
      label:'Leaderboard',
      route:'leaderboard',
    },
    {
      icon: 'dashboard',  
      label:'Contests',
      route:'contests',
    },
    {
      icon: 'campaign',  
      label:'Announcements',
      route:'announcements',
    },
    {
      icon: 'verified_user',  
      label:'LogIn as Admin',
      route:'sign-in',
    },
    {
      icon: 'admin_panel_settings',  
      label:'Admin Dashboard',
      route:'admin-dash-board',
    },
    {
      icon: 'campaign',  
      label:'Log Out',
      route:'log-out',
    }
  ]);

  profilePicSize = computed(()=>this.sideNavCollapsed()?'32':'100');

}
