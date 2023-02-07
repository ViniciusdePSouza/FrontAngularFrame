import { Component, Input, OnInit } from '@angular/core';
import { NewsProps } from 'src/interface/Structure';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  image: string

  @Input()
  post!: NewsProps

  constructor() {
    this.image = '/assets/chile.jpg'
   }

  ngOnInit(): void {
  }

}
