import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Posts!:  string[]
  constructor() { 
    this.Posts = ['a', 'b', 'c', 'd', 'e', 'f']
  }

  ngOnInit(): void {
  }

}
