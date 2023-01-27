import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { NewCardComponent } from 'src/pages/new-card/new-card.component';
import { DetailsComponent } from '../pages/details/details.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'create',
    component: NewCardComponent
  },

  {
    path: 'details/2',
    component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
