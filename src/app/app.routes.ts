import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NewsComponent } from './components/pages/news/news.component';
import { MembershipComponent } from './components/pages/membership/membership.component';
import { FriendsComponent } from './components/pages/friends/friends.component';
import { HelpComponent } from './components/pages/help/help.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { LoginComponent } from './components/login/login.component';
import { MeetingsComponent } from './components/pages/meetings/meetings.component';

//admin
import { AuthGuard } from './guard/auth.guard';
import { FriendsEditComponent } from './admin/pages-edit/friends-edit/friends-edit.component';
import { UploadEditComponent } from './admin/pages-edit/upload-edit/upload-edit.component';
import { MeetingsEditComponent } from './admin/pages-edit/meetings-edit/meetings-edit.component';
import { NewsEditComponent } from './admin/pages-edit/news-edit/news-edit.component';
import { InstructionComponent } from './admin/pages-edit/instruction/instruction.component';

export const routes: Routes = [
  { path: '',   redirectTo: '/home',   pathMatch : 'full' },
  { path: 'home',   	     component: HomeComponent },
  { path: 'login', 		     component: LoginComponent },
  { path: 'news',   	     component: NewsComponent },
  { path: 'membership',    component: MembershipComponent },
  { path: 'friends', 	     component: FriendsComponent },
  { path: 'help',   	     component: HelpComponent },
  { path: 'history',       component: HistoryComponent },
  { path: 'meetings',      component: MeetingsComponent },
  // admin pages
  { path: 'upload-edit',   component: UploadEditComponent, canActivate: [AuthGuard] },   // canActivate: [AuthGuard]
  { path: 'friends-edit',  component: FriendsEditComponent, canActivate: [AuthGuard] },  // canActivate: [AuthGuard]
  { path: 'meetings-edit', component: MeetingsEditComponent, canActivate: [AuthGuard] }, // canActivate: [AuthGuard]
  { path: 'news-edit',     component: NewsEditComponent, canActivate: [AuthGuard] },     // canActivate: [AuthGuard]
  { path: 'instruction',   component: InstructionComponent, canActivate: [AuthGuard] }   // canActivate: [AuthGuard]
 ];

export const appRoutingProviders: any[] = [
];

export const routing = RouterModule.forRoot(routes);