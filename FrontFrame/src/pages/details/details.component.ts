import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  photo: string

  constructor() { 
    this.photo = '/assets/chile.jpg'
  }

  ngOnInit(): void {
  }

}
