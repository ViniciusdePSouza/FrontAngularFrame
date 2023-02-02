import { NgModule } from '@angular/core';

//Components
import { NewCardComponent } from './new-card.component';

//Modules
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/components/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [
    NewCardComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymse.min.js' }
  ],
  exports: [
    NewCardComponent
  ]
})
export class NewCardModule { }