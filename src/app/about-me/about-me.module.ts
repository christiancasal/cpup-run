import { NgModule } from '@angular/core';
import { SharedModule } from 'app/_modules/shared.module';

import { AboutMeComponent } from './about-me.component';

@NgModule({
	imports: [
		SharedModule
	],
	exports: [],
	declarations: [ AboutMeComponent ],
	providers: [],
})
export class AboutMeModule { }
