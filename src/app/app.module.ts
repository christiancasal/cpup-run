import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './_modules/core.module';
import { AppRoutingModule } from './app.routing';
import { PageNotFoundComponent } from './_pages/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		CoreModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
