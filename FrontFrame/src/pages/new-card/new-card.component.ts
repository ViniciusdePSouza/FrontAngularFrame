import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServices } from 'src/app/services/post-services.service';

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

  constructor(private postService:PostServices) {
    
  }

  onSaveContent() {
    this.postService.Post({"structureHtml":this.html}).subscribe();
    alert(this.html);
  }

  ngOnInit(): void {

  }

}

