import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { ContestsComponent } from './pages/contests/contests.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpcomingContestComponent } from './components/upcoming-contest/upcoming-contest.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserRequestsComponent } from './components/user-requests/user-requests.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import {AdminDashBoardComponent } from './pages/admin-dash-board/admin-dash-board.component';
import { LogoutComponent } from './components/logout/logout.component';

import { AuthGuard } from './guards/auth.guard';
import { contestGuard } from './guards/contest.guard';

const routes: Routes = [
  {path: '', component: LeaderboardComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'contests', component: ContestsComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'upcoming-contest', component: UpcomingContestComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'user-requests', component: UserRequestsComponent},
  {path: 'admin-dash-board', component: AdminDashBoardComponent, canActivate: [AuthGuard]},
  {path: 'log-out', component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
