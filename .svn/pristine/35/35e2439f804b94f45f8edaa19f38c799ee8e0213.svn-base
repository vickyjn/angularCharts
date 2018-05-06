import {
	Component,
	OnInit,
	Input
} from '@angular/core';
import * as d3 from 'd3';

@Component({
	selector: 'chart-line',
	templateUrl: './chart-line.component.html',
	styleUrls: ['./chart-line.component.css']
})
export class ChartLineComponent implements OnInit {
	@Input() data: any[];
	constructor() {}

	ngOnInit() {
		var svg = d3.select("svg#line"),
			margin = {
				top: 20,
				right: 20,
				bottom: 30,
				left: 50
			},
			width = +svg._groups[0][0].clientWidth - margin.left - margin.right,
			height = +svg._groups[0][0].clientHeight - margin.top - margin.bottom,

			g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		var parseTime = d3.timeParse("%d-%b-%y");

		var x = d3.scaleTime()
			.rangeRound([0, width]);

		var y = d3.scaleLinear()
			.rangeRound([height, 0]);

		var line = d3.line()
			.x(function(d) {
				return x(d.date);
			})
			.y(function(d) {
				return y(d.close);
			});
		var data = (this.data).map(function(d) {
			if (d) {
				d.date = parseTime(d.date);
				d.close = +d.close;
				return d;
			}

		});
		x.domain(d3.extent(data, function(d) {
			return d.date;
		}));
		y.domain(d3.extent(data, function(d) {
			return d.close;
		}));

		g.append("g")
			.attr("transform", "translate(0," + height + ")")
			.call(d3.axisBottom(x))
			.select(".domain")
			.remove();

		g.append("g")
			.call(d3.axisLeft(y))
			.append("text")
			.attr("fill", "#000")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", "0.71em")
			.attr("text-anchor", "end")
			.text("Price ($)");

		g.append("path")
			.datum(data)
			.attr("fill", "none")
			.attr("stroke", "steelblue")
			.attr("stroke-linejoin", "round")
			.attr("stroke-linecap", "round")
			.attr("stroke-width", 1.5)
			.attr("d", line);
	};
}