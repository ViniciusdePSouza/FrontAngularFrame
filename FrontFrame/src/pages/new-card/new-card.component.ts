import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../../app/service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  html: string = '<p>Hi, TinyMCE!</p>';

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: ['lists link image table code help wordcount save',
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
    ],
  }

  constructor(private list: ServiceService,private http: HttpClient) {}

  onSaveContent() {
    this.list.EnviarHtml(this.html).subscribe(x => console.log(x.status));
    alert(this.html)
  }

  ngOnInit(): void {
  }

}

