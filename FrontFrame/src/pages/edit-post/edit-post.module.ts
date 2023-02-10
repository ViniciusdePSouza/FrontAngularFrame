
import { NgModule } from '@angular/core';

//Components
import { EditPostComponent } from '../edit-post/edit-post.component';

//Modules
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../components/shared.module';
import { CommonModule } from '@angular/common';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditPostComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
     { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymse.min.js' }
    ],
  exports: [
    EditPostComponent
  ]
})
export class EditPostModule { }