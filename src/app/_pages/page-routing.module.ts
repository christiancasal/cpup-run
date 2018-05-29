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
			{ path: 'about', component: AboutMeComponent, data: { state: 'about' } },
			{ path: 'posts', component: BlogPostsComponent, data: { state: 'posts' } }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PageRoutingModule { }
