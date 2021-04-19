import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router, private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.queryParams.subscribe( e => {
      console.log(e);
    })
  }

  addNewPost() {
    this.router.navigate(["dashboard/posts/new"])
  }

  editPost(num: any) {
    this.router.navigate(["dashboard/posts/" + num])
  }

  search(nombre: string, apellido: string) {
    this.router.navigate(["/dashboard/posts"], { queryParams: { name: nombre, surname: apellido }})
  }
}
