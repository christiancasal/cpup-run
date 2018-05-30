import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
	trigger,
	state,
	style,
	animate,
	transition,
	query,
	group
} from '@angular/animations';

@Component({
	selector: 'app-page-found',
	templateUrl: './page-found.component.html',
	styleUrls: ['./page-found.component.scss'],
	animations: [
		trigger('routerTransition', [
		// 	transition('* <=> *', [
		// 		query(':enter, :leave', [
		// 			style({
		// 				position: 'fixed',
		// 				width: '100%'
		// 			})
		// 		]),
		// 		group([
		// 			query(':leave', [
		// 				animate('0.5s ease-in-out', style({
		// 					transform: 'translateX(100%)'
		// 				}))
		// 			], { optional: true }),
		// 			query(':enter', [
		// 				animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
		// 			])
		// 		])
		// ])
	])]
})

export class PageFoundComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	getState(outlet: RouterOutlet) {
		return outlet.activatedRoute.routeConfig.path;
	}
}
