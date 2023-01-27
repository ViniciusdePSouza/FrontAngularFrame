import { NgModule } from '@angular/core';

//Components
import { DetailsComponent } from './details.component';

//Modules
import { RouterModule } from '@angular/router';
import {SharedModule} from '../../components/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DetailsComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule
  ],
  providers: [],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }