import { NewsProps } from 'src/interface/Structure';
import { PostServices } from './../../app/services/post-services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
id!:number;
  photo!: string
  noticia!: NewsProps;

  constructor(private route: ActivatedRoute,private postservice:PostServices,private router: Router) {
    this.photo = '/assets/chile.jpg'

  }

  ngOnInit(): void {
    this.Atribuir();
  }

  DeletePost(){
    let decisao = confirm("Deseja deletar este post?");
    if(decisao){
    this.postservice.Delete(this.noticia.id).subscribe((response)=>{
      if(response.status == 200){
        alert("Deletado com sucesso.");
        this.router.navigate(['/']);
      }
      else{
        alert("Aconteceu um erro");
      }
    });
  }
  }

  Atribuir() {
    
     this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
          });

     this.postservice.GetById(this.id).subscribe(post => {
       this.noticia = post
     });
  }
}
