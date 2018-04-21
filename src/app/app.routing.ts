import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'app/_pages/page-not-found/page-not-found.component';
import { PageModule } from './_pages/page.module';

const routes: Routes = [
	{ path: '', loadChildren: () => PageModule },
	{ path: '**', redirectTo: 'not-found' },
	{ path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
