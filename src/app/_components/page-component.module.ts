import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { PageComponent } from './page/page.component';

@NgModule({
	imports: [
	],
	declarations: [
		HeaderComponent,
		SidebarComponent,
		ContentComponent,
		PageComponent,
	],
	exports: [
		HeaderComponent,
		SidebarComponent,
		ContentComponent,
		PageComponent,
	],
	providers: [],
})
export class PageComponentModule { }
