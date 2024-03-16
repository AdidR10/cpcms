import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { AnnouncementsComponent } from './pages/announcements/announcements.component';
import { ContestsComponent } from './pages/contests/contests.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';

import { RegistrationComponent } from './components/registration/registration.component';
import { SidenavbarComponent } from './components/sidenavbar/sidenavbar.component';
import { AdmiPostComponent } from './components/admin-post/admin-post.component';
import { AnnouncementFormComponent } from './components/announcement-form/announcement-form.component';
import { ContestFormComponent } from './components/contest-form/contest-form.component';
import { AnnouncementCardComponent } from './components/announcement-card/announcement-card.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UpcomingContestComponent } from './components/upcoming-contest/upcoming-contest.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserRequestsComponent } from './components/user-requests/user-requests.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { AdminDashBoardComponent } from './pages/admin-dash-board/admin-dash-board.component';
import { RequestCardComponent } from './components/request-card/request-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LeaderboardComponent,
    SidenavbarComponent,
    AnnouncementsComponent,
    ContestsComponent,
    AdmiPostComponent,
    AnnouncementFormComponent,
    ContestFormComponent,
    AnnouncementCardComponent,
    ProfileComponent,
    UpcomingContestComponent,
    SignInComponent,
    UserRequestsComponent,
    LoadingComponent,
    LoginDialogComponent,
    AdminDashBoardComponent,
    RequestCardComponent,
    RequestCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatSelectModule,
    MatCardModule,
    NgxPaginationModule,
    MatPaginatorModule,
    MatProgressBarModule,
    CdkAccordionModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass:LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
