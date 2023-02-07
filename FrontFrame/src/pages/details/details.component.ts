import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  photo!: string
  noticia!: any;

  constructor(private route: ActivatedRoute) {
    this.photo = '/assets/chile.jpg'

  }

  ngOnInit(): void {
    this.Atribuir();
  }

  Atribuir() {
    // const isbn = Number(this.route.snapshot.paramMap.get("id"));
    // this.service.BuscarHtml(isbn).subscribe(x => {
    //   this.noticia = { structureHtml: x.structureHtml, id: x.id }
    // });
  }
}
