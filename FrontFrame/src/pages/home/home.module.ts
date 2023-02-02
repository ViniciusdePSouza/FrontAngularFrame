import { NgModule } from '@angular/core';

//Components
import { HomeComponent } from './home.component';

//Modules
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/components/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    CommonModule,
  ],
  providers: [],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }