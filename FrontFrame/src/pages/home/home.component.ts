import { Component, OnInit } from '@angular/core';
import { PostServices } from 'src/app/services/post-services.service';
import { NewsProps, PostProps } from '../../interface/Structure';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Posts!: NewsProps[];

  editorConfig = {
    base_url: 'tinymce',
    suffix: 'min',
    plugins: 'list link image table wordcount'
  }

  constructor(private postservice: PostServices) { }

  GetPosts() {
    this.postservice.Get().subscribe(response => {
      this.Posts = response;
       response.forEach(post => {
        console.log(post.urlImagem)
      })
    });
  }
  ngOnInit(): void {
    this.GetPosts();
  }
}
