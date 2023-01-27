import { NgModule } from '@angular/core';

//Components
import { NewCardComponent } from './new-card.component';

//Modules
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/components/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    NewCardComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  exports: [
    NewCardComponent
  ]
})
export class NewCardModule { }