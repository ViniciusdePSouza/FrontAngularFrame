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
<<<<<<< HEAD
    this.list.BuscarTodosHTMl().subscribe(x => {this.Posts = x});
=======
    this.list.BuscarTodosHTMl().subscribe(x => {this.Posts = x; console.log(this.Posts)});
>>>>>>> 853313ecad49c866bca13e8d42b3189e8c9d6519
  }
  ngOnInit(): void {
    this.AtribuirHtmls();
  }
}
