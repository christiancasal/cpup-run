import { NgModule } from '@angular/core';
import { SharedModule } from 'app/_modules/shared.module';

import { ResumeComponent } from 'app/resume/resume.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [ ResumeComponent ]
})
export class ResumeModule { }
