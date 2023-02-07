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

  editorConfig = {
    base_url: 'tinymce',
    suffix: 'min',
    plugins: 'list link image table wordcount'
  }
  
  constructor(private postservice: PostServices) { 
  }

  AtribuirHtmls(){
     this.postservice.Get().subscribe(response => {this.Posts = response;console.log(response)});
  }
  ngOnInit(): void {
    this.AtribuirHtmls();
  }
}
