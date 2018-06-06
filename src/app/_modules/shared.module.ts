import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentModule } from 'app/_components/content/content.module';
import { CardComponent } from '../_components/card/card.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ContentModule,
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
