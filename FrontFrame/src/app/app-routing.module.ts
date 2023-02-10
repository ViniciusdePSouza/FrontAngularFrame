import { EditPostComponent } from '../pages/edit-post/edit-post.component';
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
    path: 'details/:id',
    component: DetailsComponent
  },

  {
    path: "create",
    component: NewCardComponent
  },
  {
    path: 'details/edit/:id',
    component: EditPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
