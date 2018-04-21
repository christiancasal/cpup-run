import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFoundComponent } from './page-found/page-found.component';
import { AboutMeComponent } from 'app/about-me/about-me.component';
import { BlogPostsComponent } from 'app/blog-posts/blog-posts.component';

const routes: Routes = [
	{
		path: '',
		component: PageFoundComponent,
		children: [
			{ path: 'about', component: AboutMeComponent },
			{ path: 'posts', component: BlogPostsComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PageRoutingModule { }
