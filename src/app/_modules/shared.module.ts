import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentModule } from 'app/_components/content/content.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ContentModule
	],
	exports: [
		CommonModule,
		RouterModule,
		ContentModule
	],
	declarations: [],
	providers: [],
})
export class SharedModule { }
