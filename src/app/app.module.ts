import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// angular material
import {
   MdButtonModule, MdCardModule, 
   MdMenuModule, MdToolbarModule, 
   MdIconModule, MdTableModule,
   MdInputModule, MdTooltipModule,
   MdDialogModule, MdSnackBarModule,
   MatProgressBarModule,
   MatExpansionModule, MdFormFieldModule,
   MdDatepickerModule, MdNativeDateModule,
} from '@angular/material';

// routing
import { routing, appRoutingProviders } from './app.routes';

// providers
import { AppService } from './main-services/app.service';
import { AuthService } from './main-services/auth.service';

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

//guard
import { AuthGuard} from './guard/auth.guard';

// enviroment 
import { environment } from '../environments/environment';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FriendsComponent } from './components/pages/friends/friends.component';
import { MembershipComponent } from './components/pages/membership/membership.component';
import { HelpComponent } from './components/pages/help/help.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsComponent } from './components/pages/news/news.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { TableBasicComponent } from './components/table-basic/table-basic.component';
import { MessageComponent } from './components/message/message.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { MeetingsComponent } from './components/pages/meetings/meetings.component';
import { MeetingsWindowComponent } from './components/meetings-window/meetings-window.component';
import { LoginComponent } from './components/login/login.component';
// admin
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import { FriendsEditComponent } from './admin/pages-edit/friends-edit/friends-edit.component';
import { UploadFormComponent } from './admin/pages-edit/upload-edit/upload-form/upload-form.component';
import { UploadEditComponent } from './admin/pages-edit/upload-edit/upload-edit.component';
import { FriendsEditFormComponent } from './admin/pages-edit/friends-edit/friends-edit-form/friends-edit-form.component';
import { ImgPickerComponent } from './admin/img-picker/img-picker.component';
import { MeetingsEditComponent } from './admin/pages-edit/meetings-edit/meetings-edit.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { MeetingEditFormComponent } from './admin/pages-edit/meetings-edit/meeting-edit-form/meeting-edit-form.component';
import { NewsEditComponent } from './admin/pages-edit/news-edit/news-edit.component';
import { NewsEditFormComponent } from './admin/pages-edit/news-edit/news-edit-form/news-edit-form.component';
import { InstructionComponent } from './admin/pages-edit/instruction/instruction.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendsComponent,
    MembershipComponent,
    HistoryComponent,
    HelpComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    TableBasicComponent,
    MessageComponent,
    SubscriptionComponent,
    MeetingsComponent,
    AdminMenuComponent,
    LoginComponent,
    FriendsEditComponent,
    UploadEditComponent,
    UploadFormComponent,
    FriendsEditFormComponent,
    ImgPickerComponent,
    MeetingsWindowComponent,
    MeetingsEditComponent,
    CardItemComponent,
    MeetingEditFormComponent,
    NewsEditComponent,
    NewsEditFormComponent,
    InstructionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    HttpModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule, 
    MdMenuModule, MdDialogModule,
    MdButtonModule, MdCardModule,  
    MdToolbarModule, MdIconModule,
    MdTableModule, MdInputModule,
    MdTooltipModule, MdSnackBarModule,
    MatProgressBarModule,
    MatExpansionModule, MdFormFieldModule,
    MdDatepickerModule, MdNativeDateModule,
  ],
  entryComponents: [ 
    MessageComponent, 
    SubscriptionComponent,
    ImgPickerComponent 
  ],
  providers: [AppService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
