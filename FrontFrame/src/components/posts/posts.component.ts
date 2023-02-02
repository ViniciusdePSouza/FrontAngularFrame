import { Component, Input, OnInit } from '@angular/core';
import { Structure } from 'src/interface/Structure';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  photo: string

  @Input()
  post!: Structure

  constructor() {
    this.photo = '/assets/chile.jpg'
   }

  ngOnInit(): void {
  }

}
