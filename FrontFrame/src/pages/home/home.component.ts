import { Component, OnInit } from '@angular/core';
import { PostServices } from 'src/app/services/post-services.service';
import {PostProps} from '../../interface/Structure';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Posts!: PostProps[];
<<<<<<< HEAD
  PostsforTest!: string[]
=======
>>>>>>> 6449e6df72975c6a69aebd2b5221ee17fc319447

  editorConfig = {
    base_url: 'tinymce',
    suffix: 'min',
    plugins: 'list link image table wordcount'
  }
  
  constructor(private postservice: PostServices) { 
<<<<<<< HEAD
    this.PostsforTest = ['a', 'b', 'c']
=======
>>>>>>> 6449e6df72975c6a69aebd2b5221ee17fc319447
  }

  AtribuirHtmls(){
     this.postservice.Get().subscribe(response => {this.Posts = response;console.log(response)});
  }
  ngOnInit(): void {
    this.AtribuirHtmls();
  }
}
