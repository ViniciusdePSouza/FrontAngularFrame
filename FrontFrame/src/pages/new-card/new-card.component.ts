import { Component, Input, OnInit } from '@angular/core';
import { PostServices } from 'src/app/services/post-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NewsRequest} from '../../interface/Structure';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  html!: string ;
  newPostForm!: FormGroup;
  cameraIcon: string = '/assets/camera.png'

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: ['lists link image table code help wordcount save',
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
    ],
  }

  constructor(private postService: PostServices, private fb: FormBuilder) {
    this.newPostForm = this.fb.group({
      author: ['', [Validators.required, Validators.nullValidator, Validators.minLength(5)]],
      slug: ['', [Validators.required, Validators.nullValidator, Validators.maxLength(10)]],
      title: ['', [Validators.required, Validators.nullValidator, Validators.maxLength(20)]],
      image: ([Validators.required])
    })
  }

  onSaveContent() {
    if (this.newPostForm.invalid) {
      console.log(this.newPostForm.value)
      return alert('Preencha tds os campos')
    }

    const NewPost:NewsRequest = {
      "slug": this.newPostForm.value.slug,
      "autorPostagem": this.newPostForm.value.author,
      "texto": String(this.html),
      "titulo": this.newPostForm.value.title,
      "file": this.newPostForm.value.image,
    }

    let form = new FormData();
    form.append("slug",this.newPostForm.value.slug)
    form.append("autorPostagem",this.newPostForm.value.author)
    form.append("texto",String(this.html))
    form.append("titulo",this.newPostForm.value.title)
    form.append("file",this.newPostForm.value.image)

    this.postService.PostSemJson(form).subscribe(x => console.log(x));

  }

  onChange(event: any) {
    const file: File = event.target.files[0];
    this.newPostForm.patchValue({
      image: file
    })
  }

  ngOnInit(): void {

  }

}

