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
      "titulo": this.EditPost.value.title
    }

    let form = new FormData();
    form.append("slug",this.EditPost.value.slug)
    form.append("autorPostagem",this.EditPost.value.author)
    form.append("texto",String(this.html))
    form.append("titulo",this.EditPost.value.title)

    this.postService.PostSemJson(form).subscribe(x => console.log(x));

  }

  async FetchPost(){
    const id = this.router.paramMap.subscribe(params =>{
      this.id = Number(params.get('id'));
     })
      this.postService.GetById(this.id).subscribe(Post =>{
        this.postDefaultValues = Post;
        this.EditPost.patchValue({
          author:this.postDefaultValues.autorPostagem,
          slug:this.postDefaultValues.slug,
          title:this.postDefaultValues.titulo
        });
        this.html = this.postDefaultValues.texto;
      });
  }

  ngOnInit(): void {
    this.EditPost = this.fb.group({
      id:['', [Validators.required]],
      author: ['', [Validators.required, Validators.nullValidator, Validators.minLength(5)]],
      slug: ['', [Validators.required, Validators.nullValidator, Validators.maxLength(10)]],
      title: ['', [Validators.required, Validators.nullValidator, Validators.maxLength(20)]],
      image: ([Validators.required])
    })
    this.FetchPost();
  }

}
