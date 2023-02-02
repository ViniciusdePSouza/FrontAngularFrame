import { Component, Input, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Daum } from 'src/interface/Structure';
=======
import { Structure } from 'src/interface/Structure';
>>>>>>> 853313ecad49c866bca13e8d42b3189e8c9d6519

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  photo: string

  @Input()
<<<<<<< HEAD
  post!: Daum
=======
  post!: Structure
>>>>>>> 853313ecad49c866bca13e8d42b3189e8c9d6519

  constructor() {
    this.photo = '/assets/chile.jpg'
   }

  ngOnInit(): void {
  }

}
