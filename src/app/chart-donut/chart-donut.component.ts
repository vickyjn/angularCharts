import {
	Component,
	OnInit,
	ViewEncapsulation,
	Input
} from '@angular/core';
import * as d3 from 'd3';
@Component({
	selector: 'chart-donut',
	encapsulation: ViewEncapsulation.None,
	templateUrl: './chart-donut.component.html',
	styleUrls: ['./chart-donut.component.css']
})
export class ChartDonutComponent implements OnInit {
	@Input() data: any[];

	constructor() {}

	ngOnInit() {
		var svg = d3.select("svg#donut"),
			margin = {
				top: 20,
				right: 20,
				bottom: 30,
				left: 50
			},
			width = +svg._groups[0][0].clientWidth,
			height = +svg._groups[0][0].clientHeight,
			radius = Math.min(width, height) / 2;
		var color = d3.scaleOrdinal()
			.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
		var arc = d3.arc()
			.outerRadius(radius - 10)
			.innerRadius(radius - 70);

		var pie = d3.pie()
			.sort(null)
			.value(function(d) {
				return d.population;
			});

		svg.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr('id', 'gtransform')
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		var data = (this.data).map(function(d) {
			if (d) {
				d.population = +d.population;
				return d;
			}
		});

		var g = d3.select('#gtransform').selectAll(".arc")
			.data(pie(data))
			.enter().append("g")
			.attr("class", "arc");

		g.append("path")
			.attr("d", arc)
			.style("fill", function(d) {
				return color(d.data.age);
			});

		g.append("text")
			.attr("transform", function(d) {
				return "translate(" + arc.centroid(d) + ")";
			})
			.attr("dy", ".35em")
			.text(function(d) {
				return d.data.age;
			});
	}

}