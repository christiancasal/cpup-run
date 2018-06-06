import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentTitleComponent } from 'app/_components/content/content-title/content-title.component';
import { ContentBodyComponent } from 'app/_components/content/content-body/content-body.component';
import { ContentComponent } from 'app/_components/content/content.component';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
	imports: [
		CommonModule,
	],
	declarations: [
		ContentTitleComponent,
		ContentBodyComponent,
		ContentComponent,
		ContentCardComponent
	],
	exports: [
		ContentTitleComponent,
		ContentBodyComponent,
		ContentComponent,
		ContentCardComponent
	]
})
export class ContentModule { }
