import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ContestsComponent } from './pages/contests/contests.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
const routes: Routes = [
  {path: '', component: LeaderboardComponent},
  {path: 'leaderboard', component:LeaderboardComponent},
  {path: 'contests', component: ContestsComponent},
  {path: 'announcements', component: AnnouncementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
