import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostServices } from 'src/app/services/post-services.service';
import { NewsRequest, NewsProps } from 'src/interface/Structure';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  EditPost!: FormGroup;
  cameraIcon: string = '/assets/camera.png'
  postDefaultValues!:NewsProps;
  id!:number;
  html!: string;


  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: ['lists link image table code help wordcount save',
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
    ],
  }

  constructor(private postService: PostServices, private fb: FormBuilder,private router:ActivatedRoute) {
    this.EditPost = this.fb.group({
      author: ['', [Validators.required, Validators.nullValidator, Validators.minLength(5)]],
      slug: ['', [Validators.required, Validators.nullValidator, Validators.maxLength(10)]],
      title: ['', [Validators.required, Validators.nullValidator, Validators.maxLength(20)]],
      image: ([Validators.required])
    })
   }


   onChange(event: any) {
    const file: File = event.target.files[0];
    this.EditPost.patchValue({
      image: file
    })
  }

   get title(){
    return this.EditPost.get('title')!;
  }
  get slug(){
    return this.EditPost.get('slug')!;
  }
  get author(){
    return this.EditPost.get('author')!;
  }
  get image(){
    return this.EditPost.get('image')!;
  }

    onSaveContent() {
    if (this.EditPost.invalid) {
      console.log(this.EditPost.value)
    }
    const NewPost:NewsRequest = {
      "slug": this.EditPost.value.slug,
      "autorPostagem": this.EditPost.value.author,
      "texto": String(this.html),
      "titulo": this.EditPost.value.title,
      "file": this.EditPost.value.image,
    }

    let form = new FormData();
    form.append("slug",this.EditPost.value.slug)
    form.append("autorPostagem",this.EditPost.value.author)
    form.append("texto",String(this.html))
    form.append("titulo",this.EditPost.value.title)
    form.append("file",this.EditPost.value.image)

    this.postService.PostSemJson(form).subscribe(x => console.log(x));

  }

  async FetchDefaultValues(){
    this.router.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'));
     })
      this.postService.GetById(this.id).subscribe(Post =>{
        this.postDefaultValues = Post;
      });
  }
  ngOnInit(): void {

  }

}
