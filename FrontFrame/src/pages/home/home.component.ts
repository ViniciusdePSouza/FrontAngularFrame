import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Structure } from 'src/interface/Structure';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Posts!: Structure[];

  editorConfig = {
    base_url: 'tinymce',
    suffix: 'min',
    plugins: 'list link image table wordcount'
  }
  
  constructor(private list: ServiceService) { 
  }

  AtribuirHtmls(){
    this.list.BuscarTodosHTMl().subscribe(x => {this.Posts = x; console.log(this.Posts)});
  }
  ngOnInit(): void {
    this.AtribuirHtmls();
  }
}
