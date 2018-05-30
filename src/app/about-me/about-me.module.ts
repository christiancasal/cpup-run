import { NgModule } from '@angular/core';

import { AboutMeComponent } from './about-me.component';
import { SharedModule } from 'app/_modules/shared.module';

@NgModule({
	imports: [
		SharedModule
	],
	exports: [],
	declarations: [ AboutMeComponent ],
	providers: [],
})
export class AboutMeModule { }
