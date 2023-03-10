import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input()
  title!: string

@Input() initialValue?:string;

  @Input()
  type!: string

  @Input()
  placeholder!: string

  @Input()
  iconReference!: string

  @Input()
  control!: FormControl

  constructor() { }

  ngOnInit(): void {
  }

}
