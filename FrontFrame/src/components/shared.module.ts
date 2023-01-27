import { NgModule } from '@angular/core';

//Components
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';

//Modules
import { RouterModule, } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        PostsComponent
    ],
    imports: [
        RouterModule,
    ],
    providers: [],
    exports: [
        HeaderComponent,
        PostsComponent
    ]
})
export class SharedModule { }
