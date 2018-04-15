import { NgModule, Optional, SkipSelf } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PageComponentModule } from '../_components/page-component.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AboutMeModule } from '../about-me/about-me.module';
import { BlogPostsModule } from '../blog-posts/blog-posts-module';

@NgModule({
	imports: [
		FormsModule,
		HttpModule,
		PageComponentModule,
		AboutMeModule,
		BlogPostsModule
	],
	exports: [
		FormsModule,
		HttpModule,
		PageComponentModule,
	],
	declarations: [],
	providers: [],
})

export class CoreModule {
	constructor( @Optional() @SkipSelf() parentModule: CoreModule) { }
}
