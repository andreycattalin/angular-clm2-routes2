import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { SettingsComponent } from './dashboard/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      LoginComponent,
      DashboardComponent,
      HomeDashboardComponent,
      PostsComponent,
      SettingsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
