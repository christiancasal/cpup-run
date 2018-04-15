import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

const routes: Routes = [
	{ path: 'about', component: AboutMeComponent },
	{ path: 'posts', component: BlogPostsComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
