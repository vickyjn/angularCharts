import {
	Component,
	OnInit,
	Input
} from '@angular/core';

@Component({
	selector: 'section-table',
	templateUrl: './section-table.component.html',
	styleUrls: ['./section-table.component.css']
})
export class SectionTableComponent implements OnInit {
	@Input() data: Array < any > ;
	@Input() colDefs: Array < any > ;
	tableHeaders: Array < any > ;
	constructor() {}

	ngOnInit() {}
	ngDoCheck() {};


}