import {
	Component,
	OnInit,
	DoCheck,
	Input
} from '@angular/core';
import * as d3 from 'd3';
@Component({
	selector: 'chart-bar',
	templateUrl: './chart-bar.component.html',
	styleUrls: ['./chart-bar.component.css']
})
export class ChartBarComponent implements DoCheck {
	@Input() data: any[];
	@Input() sid: string;
	@Input() x: string;
	@Input() y: string;
	constructor() {}

	ngDoCheck() {
		if (this.data && this.data.length) {
			this.drawBar(this.data);
		}
	};
	drawBar(data: any[]) {
		let self = this,
			xmap = self.x,
			ymap = self.y;
		let svg = d3.select("#" + self.sid),
			margin = {
				top: 20,
				right: 20,
				bottom: 30,
				left: 40
			},
			width = +svg._groups[0][0].clientWidth - margin.left - margin.right,
			height = +svg._groups[0][0].clientHeight - margin.top - margin.bottom;


		let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
			y = d3.scaleLinear().rangeRound([height, 0]);

		let g = svg.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");


		x.domain(data.map(function(d) {
			return d[xmap];
		}));
		y.domain([0, d3.max(data, function(d) {
			return d[ymap];
		})]);

		g.append("g")
			.attr("class", "axis axis--x")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x));

		g.append("g")
			.attr("class", "axis axis--y")
			.call(d3.axisLeft(y).ticks(5))
			.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("text-anchor", "end")
			.text("Frequency");

		g.selectAll(".bar")
			.data(data)
			.enter().append("rect")
			.attr("class", "bar")
			.attr("x", function(d) {
				return x(d[xmap]);
			})
			.attr("y", function(d) {
				return y(d[ymap]);
			})
			.attr("width", x.bandwidth())
			.attr("height", function(d) {
				return height - y(d[ymap]);
			});


	};
};