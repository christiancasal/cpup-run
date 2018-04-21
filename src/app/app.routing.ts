import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';

const routes: Routes = [
	{ path: '', component: AboutMeComponent },
	{ path: 'about', component: AboutMeComponent },
	{ path: 'posts', component: BlogPostsComponent },
	{ path: '**', redirectTo: 'posts' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
