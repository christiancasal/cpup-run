import { NgModule } from '@angular/core';
import { SharedModule } from 'app/_modules/shared.module';

import { BlogPostsComponent } from 'app/blog-posts/blog-posts.component';

@NgModule({
	imports: [
		SharedModule
	],
	exports: [],
	declarations: [ BlogPostsComponent ],
	providers: [],
})
export class BlogPostsModule { }
