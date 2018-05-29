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
			transition('* <=> *', [
				group([
					query(':leave', [
						style({ width: '100%' }),
						animate('1s ease-out', style({
							width: 0,
							transform: 'translateX(100%)'
						}))
					], { optional: true }),
					query(':enter', [
						style({
							opacity: '0',
							display: 'none'
						}),
						animate('2s 1s ease-in', style({
							opacity: '1'
						}))
				])
			])
	]) ],
})
export class PageFoundComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	getState(outlet: RouterOutlet) {
		return outlet.activatedRoute.routeConfig.path;
	}
}
