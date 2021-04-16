import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.scss']
})
export class PostsDetailComponent implements OnInit {

  result = ""

  constructor(private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.params.subscribe( params => {
      console.log(params)
      this.result = params.id
    })
  }

}
