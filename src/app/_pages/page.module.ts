import { NgModule } from '@angular/core';

import { PageFoundComponent } from 'app/_pages/page-found/page-found.component';
import { AboutMeModule } from 'app/about-me/about-me.module';
import { BlogPostsModule } from 'app/blog-posts/blog-posts-module';
import { SharedModule } from 'app/_modules/shared.module';
import { PageRoutingModule } from 'app/_pages/page-routing.module';

import { HeaderComponent } from 'app/_components/header/header.component';
import { SidebarComponent } from 'app/_components/sidebar/sidebar.component';
import { ContentComponent } from 'app/_components/content/content.component';
import { PageComponent } from 'app/_components/page/page.component';

@NgModule({
	imports: [
		AboutMeModule,
		BlogPostsModule,
		PageRoutingModule,
		SharedModule
	],
	exports: [],
	declarations: [
		PageFoundComponent,
		HeaderComponent,
		SidebarComponent,
		PageComponent
	],
	providers: [],
})
export class PageModule { }
