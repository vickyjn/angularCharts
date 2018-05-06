import {
	Injectable
} from '@angular/core';

import {
	HttpClient
} from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CommonService {
	constructor(private http: HttpClient) {}

	getSampleData1 = function() {
		return this.http.get('assets/json/sample');
	};
	getTrendData = function() {
		return this.http.get('assets/json/trend');
	};
	getLineData = function() {
		return this.http.get('assets/json/line');
	};
	getPieData = function() {
		return this.http.get('assets/json/pie');
	};
	getDonutData = function() {
		return this.http.get('assets/json/donut');
	};
	getMapData = function() {
		return this.http.get('assets/json/map');
	};
	getPlotData = function() {
		return this.http.get('assets/json/plot');
	};
}