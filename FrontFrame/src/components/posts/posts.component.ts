import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  photo: string

  @Input()
  post!: string

  constructor() {
    this.photo = '/assets/chile.jpg'
   }

  ngOnInit(): void {
  }

}
