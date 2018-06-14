import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from 'app/_pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', loadChildren: 'app/_pages/page.module#PageModule' },
	{ path: '**', redirectTo: 'not-found' },
	{ path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
