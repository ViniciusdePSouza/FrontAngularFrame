import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';
import { Structure } from 'src/interface/Structure';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

<<<<<<< HEAD
  photo!: string
  noticia!: Structure;

  constructor(private service: ServiceService, private route: ActivatedRoute) {
=======
  photo: string
noticia!: Structure;
  constructor(private service: ServiceService,private route: ActivatedRoute) { 
>>>>>>> 853313ecad49c866bca13e8d42b3189e8c9d6519
    this.photo = '/assets/chile.jpg'

  }

  ngOnInit(): void {
    this.Atribuir();
  }

<<<<<<< HEAD
  Atribuir() {
    const isbn = Number(this.route.snapshot.paramMap.get("id"));
    this.service.BuscarHtml(isbn).subscribe(x => {
      this.noticia = { structureHtml: x.structureHtml, id: x.id }
    });
=======
  Atribuir(){
    const isbn = Number(this.route.snapshot.paramMap.get("id"));
   this.service.BuscarHtml(isbn).subscribe(x => {
    this.noticia = {structureHtml: x.structureHtml, id: x.id}
   });
>>>>>>> 853313ecad49c866bca13e8d42b3189e8c9d6519
  }
}
