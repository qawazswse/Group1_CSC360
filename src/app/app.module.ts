import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExeinfoComponent } from './exeinfo/exeinfo.component';
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
//Environment
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodComponent } from './food/food.component';
import { WorkoutComponent } from './workout/workout.component';
import { BmiComponent } from './bmi/bmi.component';
// HttpClient
import { HttpClientModule } from '@angular/common/http';
// Autocomplete component for angular
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SignupUserdataComponent } from './signup-userdata/signup-userdata.component';
import { UpdateUserdataComponent } from './update-userdata/update-userdata.component';
import { ProfileComponent } from './profile/profile.component';
import { OneRepMaxComponent } from './one-rep-max/one-rep-max.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
    FooterComponent,
    HomepageComponent,
    DashboardComponent,
    FoodComponent,
    WorkoutComponent,
    BmiComponent,
    SignupUserdataComponent,
    UpdateUserdataComponent,
    ExeinfoComponent,
    ProfileComponent,
    OneRepMaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    AutocompleteLibModule,
    BrowserAnimationsModule,
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
