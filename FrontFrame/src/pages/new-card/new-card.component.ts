import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {

  newPostForm!: FormGroup;

  @Input()
  control!: FormControl

  constructor(private fb: FormBuilder) {
    this.newPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(8)]],
      img: [null,Validators.required]
    })
   }

  ngOnInit(): void {
  }

}

