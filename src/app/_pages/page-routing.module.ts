import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFoundComponent } from './page-found/page-found.component';
import { AboutMeComponent } from 'app/about-me/about-me.component';
import { BlogPostsComponent } from 'app/blog-posts/blog-posts.component';
import { ResumeComponent } from 'app/resume/resume.component';

const routes: Routes = [
	{
		path: '',
		component: PageFoundComponent,
		children: [
			{ path: 'about', component: AboutMeComponent, data: { state: 'about' } },
			{ path: 'posts', component: BlogPostsComponent, data: { state: 'posts' } },
			{ path: 'resume', component: ResumeComponent, data: { state: 'resume' } },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PageRoutingModule { }
