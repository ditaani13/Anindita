import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './componenet/student-details/student-details.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FooterComponenetComponent } from './footer-componenet/footer-componenet.component';
import { LogoutComponentComponent } from './logout-component/logout-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StudentDetailsComponent,
    LoginpageComponent,
    FooterComponenetComponent,
    LogoutComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
