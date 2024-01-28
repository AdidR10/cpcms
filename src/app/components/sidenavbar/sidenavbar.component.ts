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
      icon: 'comment',  
      label:'Announcements',
      route:'announcements',
    }
  ]);

  profilePicSize = computed(()=>this.sideNavCollapsed()?'32':'100');

}
