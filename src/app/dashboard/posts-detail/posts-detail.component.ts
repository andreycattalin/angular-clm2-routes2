import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {

  result = ""
  isEditMode: boolean = true

  constructor(private active: ActivatedRoute, private router: Router) {
    if(router.url.includes("new")) {
      this.isEditMode = false
    } else {
      this.isEditMode = true
    }
  }

  ngOnInit() {
    this.active.params.subscribe( params => {
      this.result = params.id
    })
  }

}
