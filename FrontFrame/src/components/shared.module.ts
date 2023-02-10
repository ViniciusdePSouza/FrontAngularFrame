import { NgModule } from '@angular/core';

//Components
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

//Modules
import { RouterModule, } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HeaderComponent,
        PostsComponent,
        InputComponent,
        ButtonComponent,
    ],
    imports: [
        RouterModule,
        EditorModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [
        HeaderComponent,
        PostsComponent,
        InputComponent,
        ButtonComponent
    ]
})
export class SharedModule { }
