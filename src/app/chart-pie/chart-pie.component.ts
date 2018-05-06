import {
	Component,
	OnInit,
	ViewEncapsulation,
	Input
} from '@angular/core';
import * as d3 from 'd3';
@Component({
	selector: 'chart-pie',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './chart-pie.component.html',
	styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit {
	@Input() data: any[];
	constructor() {}

	ngOnInit() {
		var svg = d3.select("svg#pie"),
			margin = {
				top: 20,
				right: 20,
				bottom: 30,
				left: 50
			},
			width = +svg._groups[0][0].clientWidth - margin.left - margin.right,
			height = +svg._groups[0][0].clientHeight - margin.top - margin.bottom,
			radius = Math.min(width, height) / 2,
			g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		var color = d3.scaleOrdinal(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

		var pie = d3.pie()
			.sort(null)
			.value(function(d) {
				return d.population;
			});

		var path = d3.arc()
			.outerRadius(radius - 10)
			.innerRadius(0);

		var label = d3.arc()
			.outerRadius(radius - 40)
			.innerRadius(radius - 40);

		var data = (this.data).map(function(d) {
			if (d) {
				d.population = +d.population;
				return d;
			}
		});

		var arc = g.selectAll(".arc")
			.data(pie(data))
			.enter().append("g")
			.attr("class", "arc");

		arc.append("path")
			.attr("d", path)
			.attr("fill", function(d) {
				return color(d.data.age);
			});

		arc.append("text")
			.attr("transform", function(d) {
				return "translate(" + label.centroid(d) + ")";
			})
			.attr("dy", "0.35em")
			.text(function(d) {
				return d.data.age;
			});

	}

}