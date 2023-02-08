import { Component, Input, OnInit } from '@angular/core';
import { PostServices } from 'src/app/services/post-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  html: string = '<p>Hi, TinyMCE!</p>';
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
    // if (this.newPostForm.invalid) {
    //   return alert('Preencha tds os campos')
    // }

    const NewPost = {
      "slug": this.newPostForm.value.slug,
      "autorPostagem": this.newPostForm.value.author,
      "texto": this.html,
      "titulo": this.newPostForm.value.title,
      "urlImagem": this.newPostForm.value.image,
    }

    console.log(NewPost);

    // this.postService.Post(NewPost).subscribe();
    // alert(this.html);
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

