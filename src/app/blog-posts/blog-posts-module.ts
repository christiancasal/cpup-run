import { NgModule } from '@angular/core';

import { BlogPostsComponent } from './blog-posts.component';
import { SharedModule } from 'app/_modules/shared.module';

@NgModule({
	imports: [
		SharedModule
	],
	exports: [],
	declarations: [ BlogPostsComponent ],
	providers: [],
})
export class BlogPostsModule { }
