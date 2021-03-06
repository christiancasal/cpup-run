import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-content-title',
	templateUrl: './content-title.component.html',
	styleUrls: ['./content-title.component.scss']
})
export class ContentTitleComponent implements OnInit {
	@Input() title: string;

	constructor() { }

	ngOnInit() {
	}

}
