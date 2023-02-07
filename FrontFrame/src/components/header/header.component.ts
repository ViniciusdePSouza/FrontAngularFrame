import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo: string
  homeIcon: string

  constructor() {
    this.logo = '/assets/frameLogo.png'
    this.homeIcon = '/assets/homeIcon.png'
   }

  ngOnInit(): void {
  }

}
