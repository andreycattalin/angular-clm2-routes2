import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isSettings = false

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.subscribe( result => {
      if(result instanceof NavigationEnd) {
        if(result.url == "/dashboard/settings") {
          this.isSettings = true
        } else {
          this.isSettings = false
        }
      }
    })
  }

}
