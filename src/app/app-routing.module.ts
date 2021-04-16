import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';
import { PostsComponent } from './dashboard/posts/posts.component';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { PostsDetailComponent } from './dashboard/posts-detail/posts-detail.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent, children: [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeDashboardComponent },
    { path: "posts", component: PostsComponent },
    { path: "posts/new", component: PostsDetailComponent },
    { path: "posts/:id", component: PostsDetailComponent },
    { path: "settings", component: SettingsComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
